<template>
  <div id="app" class="container">
    <todolist></todolist>
  </div>
</template>

<script>
import Todolist from './Todolist.vue'

export default {
  name: 'app',
  components: {
      Todolist
  },
}
</script>

<style>

</style>
