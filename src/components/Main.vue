<template>
	<MainLeft/>  
	<MainRight/>  
</template>

<script>
import MainLeft from './MainLeft.vue'
import HelloWorld from './MainRight.vue'

export default {
  name: 'Main',
  components: {MainLeft, MainRight},
}
</script>

<style>

</style>

