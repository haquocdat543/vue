<template>
	<TodoItem v-for="todo in todos"
       	:key="todo.id"
       	:todoProps="todo"
       	@item-completed="markCompleted"
       	@delete-item="deleteTodo"
	/>
</template>

<script>
import { ref } from "vue"
import TodoItem from "./TodoItem"
export default {
  name: 'TodoList',
  components: {TodoItem},
  setup () {
    const todos = ref([
    {
    id: 1,
    title: 'member 1',
    completed: false
    },
    {
    id: 2,
    title: 'member 2',
    completed: false
    },
    {
    id: 3,
    title: 'member 3',
    completed: true
    },
    {
    id: 4,
    title: 'member 4',
    completed: false
    },
    {
    id: 5,
    title: 'member 5',
    completed: false
    }
    ])
  const markCompleted = id => {
	todos.value = todos.value.map( todo => {
	if (todo.id = id) todo.completed = !todo.completed
	return todo
	})
  }
  const deleteTodo= id => {
	todos.value = todos.value.filter( todo => todo.id !== id )
  }
  return {
  todos,
  markCompleted,
  deleteTodo
  }
  }
}
</script>

<style>

</style>

