<template>
  <div id="app">
    <TheHeader />
    <TodoList />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TodoList from "./components/TodoList"

export default {
  name: 'App',
  components: { TheHeader, TodoList }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
