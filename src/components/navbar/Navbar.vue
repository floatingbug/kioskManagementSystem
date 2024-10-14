<script setup>
import {ref, onMounted} from "vue";
import {userStore} from "../../store/store.js";
import UserMenu from "./UserMenu.vue";
import NavbarLdNotSigned from "./NavbarLdNotSigned.vue";
import NavbarLdSigned from "./NavbarLdSigned.vue";
import NavbarSdNotSigned from "./NavbarSdNotSigned.vue";
import NavbarSdSigned from "./NavbarSdSigned.vue";

const checked = ref(false);
const device = ref("");
const isMenuClosed = ref(false);

onMounted(() => {
	device.value = window.innerWidth >= 1000 ? "ld" : "sd";

	window.addEventListener("resize", (e) => {
		device.value = e.target.innerWidth <= 1000 ? "sd" : "ld";
	});
});

function switchMode(){
	document.documentElement.classList.toggle("dark-mode");

	if(document.documentElement.classList.contains("dark-mode")){
		localStorage.setItem("isDarkMode", true);
	}
	else {
		localStorage.setItem("isDarkMode", false); 
	}
}
</script>


<template>
	<!-- show if user is not signed in and its large device -->
	<NavbarLdNotSigned v-if="device === 'ld' && !userStore.isSignedIn" />

	<!-- show if user is signed in and its large device -->
	<NavbarLdSigned v-if="device === 'ld' && userStore.isSignedIn" />

	<!-- show if user is not signed in and its small device -->
	<NavbarSdNotSigned v-if="device === 'sd' && !userStore.isSignedIn" />

	<!-- show if user is signed in and its small device -->
	<NavbarSdSigned v-if="device === 'sd' && userStore.isSignedIn" />
</template>


<style scoped>
</style>
