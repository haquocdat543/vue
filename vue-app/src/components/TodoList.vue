<template>
	<TodoItem v-for="todo in todos" v-bind:key="todo" v-bind:todoProps="todo"/>
</template>

<script>
import { ref } from "vue"
import TodoItem from "./TodoItem"
export default {
  name: 'TodoList',
  components: {TodoItem},
  setup () {
    const todos = ref(['member 1','member 2','member 3','member 4'])

  return {
  todos
  }
  }
}
</script>

<style>

</style>

