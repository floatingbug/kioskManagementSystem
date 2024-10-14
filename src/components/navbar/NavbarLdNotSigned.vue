<script setup>
</script>


<template>
	<div class="container">
		<div class="left">
			<Button as="router-link" to="/" label="Home" icon="pi pi-home" size="large" link />
		</div>

		<div class="mid">
		</div>

		<div class="right">
			<div class="sign-container">
				<Button as="router-link" to="/sign-in" label="Sign in" link />
				<Button as="router-link" to="/sign-up" label="Sign up" link />
			</div>
		</div>
	</div>
</template>


<style scoped>
.container {
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	background-color: var(--navbar-bg-color);
}

.left .p-button {
	text-decoration: none;
}
</style>
