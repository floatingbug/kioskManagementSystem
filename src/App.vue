<script setup>
import {onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import {userStore} from "./store/store.js";

onMounted(() => {
	userStore.isSignedIn = localStorage.getItem("token") ? true : false;
});
</script>

<template>
	<Navbar />
	
  <RouterView />
</template>

<style scoped>
</style>
