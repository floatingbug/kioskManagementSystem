<script setup>
import ToggleSwitch from 'primevue/toggleswitch';
import { ref, onMounted } from 'vue';

const checked = ref(false);

onMounted(() => {
	 checked.value = document.documentElement.classList.contains("dark-mode") ? true : false;
});

function changeTheme(){
	document.documentElement.classList.toggle("dark-mode");

	const isDarkMode = document.documentElement.classList.contains("dark-mode") ? true : false;
	isDarkMode ? localStorage.setItem("isDarkMode", true) : localStorage.setItem("isDarkMode", false);
}
</script>


<template>
    <div class="card flex justify-center">
        <ToggleSwitch v-model="checked" @change="changeTheme" >
            <template #handle="{ checked }">
                <i :class="['!text-xs pi', { 'pi-check': checked, 'pi-times': !checked }]"></i>
            </template>
        </ToggleSwitch>
    </div>
</template>


<style scoped>
.card {
	display: flex;
	align-items: center;
	padding: 0 1rem;
}
</style>
