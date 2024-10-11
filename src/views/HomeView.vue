<script setup>
import {onMounted} from "vue";
import {userStore} from "../store/store.js";
import AboutSection from "../components/homeSections/AboutSection.vue";
import HeroSection from "../components/homeSections/HeroSection.vue";

onMounted(() => {
});
</script>

<template>
	<HeroSection />
	<AboutSection />
</template>


<style scoped>
.hero {
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
