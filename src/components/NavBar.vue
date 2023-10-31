<template>
<nav class="navBar">
/* Left */
<div class="navLeft">
	<div>
		<input type="text" placeholder="Search or jump to">
	</div>
</div>
/* Center */
<div class="navCenter">
	<h2>Pulls</h2>
	<h2>Issues</h2>
	<h2>Marketplace</h2>
	<h2>Explore</h2>
</div>
/* Right */
<div>
	<h2>Bell</h2>
	<div class="navRightIcons">
		<h2>Plus</h2>
		<h2>ArrowDropDown</h2>
	</div>
	<div class="navRightIcons">
		<h2>ProfileImage</h2>
	</div>
</div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
.navBar { 
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--first-color);
	color: white;
	height: 60px;
	padding: 2px 28px;
	position: sticky;
	top: 0;
}

.navLeft { 
	display: flex;
	justify-content: space-between;
	align-items: center;

	/* img { */
		/* width: 10px; */
		/* object-fit: contain; */
	/* } */
	input {
		width: 260px;
		height: 34px;
		background-color: var(--input-color);
		margin-left: 10px;
		font-size: 14px;
		padding-left: 10px;
		font-weight: bold;
		border: 1px solid var(--line-color);
		border-radius: 4px;
	}
}
</style>

