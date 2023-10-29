<template>
	<p :class="['todoItem',todoProps.completed ? 'is-completed' : ' ']">
	<input type="checkbox" :checked="todoProps.completed"/>
	{{ todoProps.title }}
	<button class="delete-button">Delete</button>
	</p>  
</template>

<script>

export default {
  name: 'TodoItem',
  props: ['todoProps']
}
</script>

<style>
.todo-item { 
	background: #f4f4f4;
	padding: 10px;
	margin: 0;
	border-bottom: 1px #ccc dotted;
}

.delete-button { 
	background: #ff0000;
	color: #fff;
	border: none;
	cursor: pointer;
	float: right;
}
</style>

