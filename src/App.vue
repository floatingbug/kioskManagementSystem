<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/navbar/Navbar.vue";
import {userStore} from "./store/store.js";

onMounted(() => {
	userStore.isSignedIn = localStorage.getItem("token") ? true : false;
	if(localStorage.getItem("isDarkMode") === "true" || localStorage.getItem("isDarkMode") === true){
		document.documentElement.classList.toggle("dark-mode");
	}
});
</script>

<template>
	<Navbar />
	
  <RouterView />
</template>

<style scoped>
</style>
