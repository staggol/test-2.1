<template>
	<div class="form-group">
		<button v-on:click="changeFilter('search')" type="button" class="btn btn-warning">Поиск</button>
		<input v-model="search" class="form-control" v-on:click="changeFilter('search')" type="text" name="search" placeholder="Поиск по названию">
	</div>
</template>


<script>
export default {
		name: 'todoearch',
		computed: {
        filter() {
          return this.$store.state.filter
        }
      },
  		methods: {
  			changeFilter(filter) {
  				this.$store.state.filter = filter
  			}
  		},
}
</script>
