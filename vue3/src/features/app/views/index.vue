<template>
	<div class="card">
		<h1>Hey, you in Home page</h1>

		<div class="force-center">
			<button type="button" @click="$router.push({ name: 'todoIndex' })">
				Go To Todo
			</button>
			<button type="button" @click="$router.push({ name: 'postIndex' })">
				Go To Post
			</button>
		</div>
	</div>
</template>
