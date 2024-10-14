<script setup>
import {ref} from "vue";
import ThemeToggle from "./ThemeToggle.vue";
import UserMenu from "./UserMenu.vue";

const isNavClosed = ref(true);

function closeNavbar(e){
	if(e.target.closest("a")) isNavClosed.value = true;
}
</script>


<template>
	<div v-if="isNavClosed" class="nav-toggle-btn">
		<Button icon="pi pi-bars" size="large" text @click="isNavClosed = false;" />
	</div>

	<div class="container" :class="{'is-nav-closed': isNavClosed}" @click="closeNavbar">
		<div class="top">
			<h1>Kiosk Management System</h1>
		</div>

		<div class="mid">
			<Button as="router-link" to="/dashboard" label="Dashboard" icon="pi pi-home" />
			<Button as="router-link" to="/transactions" label="Transactions" icon="pi pi-chart-line" />
			<Button as="router-link" to="/products" label="Products" icon="pi pi-list" />
			<Button as="router-link" to="/messages" label="Messages" icon="pi pi-inbox" />
		</div>

		<div class="bottom">
			<Button icon="pi pi-bars" size="large" text @click="isNavClosed = true;" />

			<div class="right">
				<ThemeToggle />

				<UserMenu />
			</div>
		</div>
	</div>
</template>


<style scoped>
.container {
	width: 80%;
	min-width: 290px;
	height: 400px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: var(--navbar-bg-color);
	backdrop-filter: blur(10px);
	z-index: 1000;
	transition: transform 250ms;
}

.top {
	height: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.top h1 {
	font-size: 1.7rem;
	text-align: center;
}

.mid {
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}

.mid .p-button {
	width: 75%;
	height: 32px;
	max-width: 400px;
	text-decoration: none;
}

.mid .p-button :last-child {
	min-width: 100px;
}

.bottom {
	height: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
}

.bottom .p-button {
}

.right {
	display: flex;
	align-items: center;
}

.right .p-button {
	padding: 0.4rem;
}

.is-nav-closed {
	transform: translate(0, -100%);
}

.nav-toggle-btn {
	position: absolute;
	top: 16px;
	left: 16px;
	z-index: 1000;
}
</style>
