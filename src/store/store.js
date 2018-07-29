import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		filter: 'all',
		elements: [ 
			{
				title: "сделать что-то",
				editing: false,
				completed: true,
				id: 1,
			},
			{
				title: "выгулять кого-то",
				editing: false,
				completed: false,
				id: 2,
			},
			{
				title: "купить то-то",
				editing: false,
				completed: false,
				id: 3,
			},
		],
	},
	getters: {
		elementsFiltered (state) {
			if (state.filter == 'all') {
				return state.elements
			} else if (state.filter == 'completed') {
				return state.elements.filter(element => element.completed)
			} else if (state.filter == 'active') {
				return state.elements.filter(element => !element.completed)
			}

		},
	},
	mutations: {
		addElement(state, element) {
			state.elements.push({
				editing: false,
				completed: false,
				id: element.id,
				title: element.title,
			})
		},
		updateFilter(state, filter) {
			state.filter = filter
		},
		deleteElement(state, index) {
			state.elements.splice(index, 1)
		},
		updateElement(element) {
			eventBus.$emit('finishEdit', {
				index: this.index,
				todo: {
					id: this.id,
					title: this.title,
					completed: this.completed,
					editing: this.editing,
					beforeEditCache: this.beforeEditCache,
				},
			})
		},
	},
	actions: {
		addElement(context, element) {
			context.commit('addElement', element)
		},
		updateFilter(context, filter) {
			context.commit('updateFilter', filter)
		},
		deleteElement(context, index) {
			context.commit('deleteElement', index)
		},
		updateElement(context, element) {
			context.commit('updateElement', element)
		},
	},
})