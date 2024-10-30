<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/navbar/Navbar.vue";
import {userStore} from "./store/store.js";
import Toast from "primevue/toast";

onMounted(() => {
	userStore.isSignedIn = localStorage.getItem("token") ? true : false;
	if(localStorage.getItem("isDarkMode") === "true" || localStorage.getItem("isDarkMode") === true){
		document.documentElement.classList.toggle("dark-mode");
	}
});
</script>

<template>
	<Navbar />
	<Toast />
	
  <RouterView />
</template>

<style scoped>
</style>
