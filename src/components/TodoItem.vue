<template>
	<p :class="['todoItem',todoProps.completed ? 'is-completed' : ' ']">
	<input type="checkbox" 
	:checked="todoProps.completed"
	@change="markItemCompleted"
	/>
	{{ todoProps.title }}
	<button class="delete-button" @click="deleteItem" >Delete</button>
	</p>  
</template>

<script>

export default {
  name: 'TodoItem',
  props: ['todoProps'],
  setup(props, context) {
  	const markItemCompleted  = () => {
  		context.emit('item-completed', props.todoProps.id)
  	}
  	const deleteItem = () => {
  		context.emit('delete-item', props.todoProps.id)
  	}
	return {
	markItemCompleted,
	deleteItem
	}
  }
}
</script>

<style>
.todo-item { 
	background: #f4f4f4;
	padding: 10px;
	margin: 0;
	border-bottom: 1px #ccc dotted;
}

.is-completed { 
	text-decoration: line-through;
}

.delete-button { 
	width: 64px;
	height: 28px;
	border: none;
	background-color: #2a913d;
	color: white;
	font-size: 14px;
	font-weight: bold;
	border-radius: 6px;
	border: none;
	cursor: pointer;
	float: right;
}

.delete-button:hover { 
	background-color: #2ea043;
}
</style>

