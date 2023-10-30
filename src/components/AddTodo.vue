<template>
  <form @submit="addItem">
    <input type="text" placeholder="New work" v-model="title" />
    <input type="submit" value="Add" class="add-btn" />
  </form>
</template>

<script>
import { ref } from 'vue'

// import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'AddTodo',
  setup(props, context) {
    const title = ref('')

    const addItem = event => {
      event.preventDefault()

      const newItem = {
        // id: uuidv4(),
        title: title.value,
        completed: false
      }

      context.emit('add-todo', newItem)

      title.value = ''
    }

    return {
      title,
      addItem
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

input[type='text'] {
	width: 260px;
	height: 34px;
	background-color: var(--input-color);
	margin-left: 10px;
	font-size: 14px;
	padding-left: 10px;
	font-weight: bold;
	border: solid 1px var(--line-color);
	border-radius: 4px;
}

input[type='submit'] {
	width: 64px;
	height: 28px;
	border: none;
	background-color: #2a913d;
	color: white;
	font-size: 14px;
	font-weight: bold;
	border-radius: 6px;
}
</style>
