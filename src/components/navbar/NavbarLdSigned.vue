<script setup>
import ThemeToggle from "./ThemeToggle.vue";
import UserMenu from "./UserMenu.vue";
</script>


<template>
	<div class="container">
		<div class="left">
			<Button as="router-link" to="/dashboard" label="Dashboard" icon="pi pi-home" link />
			<Button as="router-link" to="/transactions" label="Transactions" icon="pi pi-chart-line" link />
			<Button as="router-link" to="/products" label="Products" icon="pi pi-list" link />
			<Button as="router-link" to="/messages" label="Messages" icon="pi pi-inbox" link />
		</div>

		<div class="mid">
		</div>

		<div class="right">
			<ThemeToggle />

			<UserMenu />
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

.right {
	display: flex;
}
</style>
