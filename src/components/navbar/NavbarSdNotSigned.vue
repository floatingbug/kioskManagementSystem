<script setup>
import {ref} from "vue";
import ThemeToggle from "./ThemeToggle.vue";

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
			<Button as="router-link" to="/" label="Home" />
		</div>

		<div class="bottom">
			<Button icon="pi pi-bars" size="large" text @click="isNavClosed = true;" />

			<div class="right">
				<ThemeToggle />

				<Button as="router-link" to="/sign-in" label="Sign in" link />
				<Button as="router-link" to="/sign-up" label="Sign up" link />
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
	justify-content: center;
	margin-top: 10%;
}

.mid .p-button {
	width: 75%;
	height: 32px;
	max-width: 400px;
}

.p-button {
	text-decoration: none;
}

.bottom {
	height: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
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
