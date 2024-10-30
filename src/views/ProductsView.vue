<script setup>
import {ref, onMounted} from "vue";
import ProductsEdit from "../components/products/editProducts/ProductsEdit.vue";
import TabMenu from "../components/products/TabMenu.vue";
import AddProducts from "../components/products/addProducts/AddProducts.vue";

const currentTab = ref("edit");
const currWindowSize = ref(null);
const productCategory = ref(null);
const device = ref(null);

onMounted(() => {
	window.addEventListener("resize", (e) => {
		device.value = window.innerWidth > 1000 ? "ld" : "sd";
	});

	device.value = window.innerWidth > 1000 ? "ld" : "sd";
});

function changeTab(tab){
	currentTab.value = tab;
}
</script>


<template>
	<header>
		<TabMenu v-if="device === 'ld'" @tabMenuChange="changeTab" />
	</header>

	<ProductsEdit v-if="currentTab === 'edit'" :device="device" />

	<AddProducts v-if="currentTab === 'add'" :device="device" />

	<footer>

	</footer>
</template>


<style scoped>
header {
	width: 100%;
	min-height: 100px;
}
</style>
