<template>
	<div class="form-group">
    <button type="button" v-on:click="changeFilter('completed')" class="btn btn-default">Выполненные</button>
  	<button type="button" v-on:click="changeFilter('active')" class="btn btn-default">Не выполненные</button>
  	<button type="button" v-on:click="changeFilter('all')" class="btn btn-default">Все</button>
  </div>
</template>


<script>
	export default {
  		name: 'btn-filter',
  		computed: {
        filter() {
          return this.$store.state.filter
        }
      },
  		methods: {
  			changeFilter(filter) {
  				this.$store.dispatch('updateFilter', filter)
  			}
  		},
	}
</script>
