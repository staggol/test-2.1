<template>
	<div class="element-class">
		<div>
	      <div v-if="!editing" v-on:dblclick="editEl">
	        <input type="checkbox" name="checkbox" id="check" v-model="completed"> 
	        <span :class="{completed : completed}">{{title | capitalize}}</span>
	        <button type="button" v-on:click="delElement(index)" class="btn btn-danger btn-xs">Удалить</button>
	      </div>
	      <div v-else>
	        <button class="btn btn-success" v-on:click="doneEditEl">Сохранить</button>
	        <button class="btn btn-danger" v-on:click="cancelEditEl">Отмена</button>
	        <input  v-on:keyup.enter="doneEditEl " v-on:keyup.esc="cancelEditEl " v-model="title" class="form-control" type="text" placeholder="Добавьте элемент" v-focus>
	      </div>
	    </div>
	    <hr>
	</div>
</template>

<script>
	export default {
		name: 'todo-item',
		props: {
			element: {
				type: Object,
				required: true,
			},
			index: {
				type: Number,
				required: true,
			}
		},
		data() {
			return {
				id: this.element.id,
				title: this.element.title,
				completed: this.element.completed,
				editing: this.element.editing,
				beforeEditCache: '',
			}
		},
		methods: {
			delElement(index) {
				this.$store.dispatch('deleteElement', index)
			},
			editEl () {
				this.beforeEditCache = this.title
				this.editing = true
			},
			doneEditEl () {
				if (this.title.trim() == 0) {
					this.title = this.beforeEditCache
			}
				this.editing = false
				this.$store.dispatch('updateElement', {
					id: this.id,
					title: this.title,
					completed: this.completed,
					editing: this.editing,
					beforeEditCache: this.beforeEditCache,
				})
			},

			cancelEditEl () {
				this.title = this.beforeEditCache
				this.editing = false
			},


		},

		directives: {
		  focus: {
		    inserted (el) {
		      el.focus()
		    }
		  }
		},

		filters: {
		capitalize (element) {
		    return element.charAt(0).toUpperCase() + element.slice(1)
		}
	}

		
	}
</script>

