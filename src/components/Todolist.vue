<template>
	<div> 
      <form class="form-inline" role="form">
        <div class="form-group">
          <button type="button" v-on:click="addElement" class="btn btn-info">Добавить</button>
          <input v-model="newElement" class="form-control" v-on:keyup.enter="addElement" type="text" placeholder="Добавьте задачу">
        </div>
        <div class="form-group">
		<button v-on:click="changeFilter('search')" type="button" class="btn btn-warning">Поиск</button>
		<input v-model="search" class="form-control" v-on:click="changeFilter('search')" type="text" name="search" placeholder="Поиск по названию">
		</div>
        <btn-filter></btn-filter>
      </form>
      <hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Задачи:</th>
          </tr>
        </thead>
        <tbody>
        	<tr>
        		<th scope="row">
		          <todo-item v-for="(element, index) in elementsFiltered"  :key="element.id" :element="element" :index="index">
		          </todo-item>
		      </th>
      		</tr>
        </tbody>
      </table>
    </div>
</template>



<script>
import TodoItem from './TodoItem.vue'
import BtnFilter from './BtnFilter.vue'
import Todoearch from './Todoearch.vue'


export default {
	name: 'todolist',
	
	components: {
		BtnFilter,
		TodoItem,
		Todoearch,
	},

	data () {
		return {
			newElement: '',
			idForElement: 4,
			search: '',
			beforeEditCache: '',
		}

	},

	methods: {
		addElement () {

			if (this.newElement.trim() == 0) {
				return
			}
		
			this.$store.dispatch('addElement', {
				id: this.idForElement,
				title: this.newElement,
			})

			this.newElement = ''
			this.idForElement++
		},
		
	},

	computed: {
		elementsFiltered () {
			return this.$store.getters.elementsFiltered
			
		},

	},

	
}


</script>

<style>
body {

  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;

  font-family: sans-serif;
}

div#app {
  margin-top: 1rem;
  font-size: 21px;
}

div#app form {
  margin-top: 1rem;
}

div#app form .form-group {
  margin-right: 2rem;
}

div#app table tbody .form-control {
  display: inline-block;
  width: 30%;
  height: 4rem;
  font-size: 18px;
}

.completed {
  text-decoration: line-through;
  color: grey;
}

div#app button:focus,
div#app button:active {
  outline: none;
}



</style>