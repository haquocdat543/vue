<template>
	<div class="mainLeftContainer">
		<div class="mainLeft">
			<div class="mainLefrName">
				<h2>image</h2>
				<h2>Universe code</h2>
				<h2>ArrowDropDown</h2>
			</div>
			<div class="line" />
			<div>
				<div>
					<h2>Recent Repositories</h2>
					<button>New</button>
				</div>
				<div class="inputBox">
					<input type="text" placeholder="Find a repository">
				</div>
			</div>
			<div class="mainLeftLists">
				{list.map((item,idx) => (
				<div>
					<h2>image</h2>
					<div>
						<h2>'${item.name}/${item.repo}'</h2>
					</div>
				</div>
				))}	
				<a href="Show more" ></a>
			</div>
			<div class="line"/>
			<div class="recentRepo">
				<div class="recentRepos">
					<h2>Recent repos</h2>
				</div>
				<div class="inputBoxTwo">
					<input type="text" placeholder="Find a team...">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'MainLeft',
}
</script>

<style>

</style>

