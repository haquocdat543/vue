<template>
	<main>
	<MainLeft/>  
	<MainRight/>  
	</main>
</template>

<script>
import MainLeft from './MainLeft.vue'
import MainRight from './MainRight.vue'

export default {
  name: 'Main',
  components: {MainLeft, MainRight},
}
</script>

<style>

</style>

