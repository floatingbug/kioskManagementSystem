<script setup>
import Select from 'primevue/select';
import { ref } from "vue";

const selectedProducts = ref();
const products = ref([
    { 
		name: "Drinks"
	},
	{
		name: "Books"
	}
]);
const emit = defineEmits();

function selectProduct(product){
	const productName = product.value.name.charAt(0).toLowerCase() + product.value.name.slice(1);
	emit("selected-product", productName);
}
</script>


<template>
	<div class="card flex justify-center">
        <Select v-model="selectedProducts" :options="products" 
			@change="selectProduct"
			optionLabel="name" placeholder="Select a Category" />
    </div>
</template>
