<script setup>
import {ref, onMounted, inject, watch} from "vue";
import DataView from 'primevue/dataview';
import Divider from 'primevue/divider';
import ProgressSpinner from "../../utils/ProgressSpinner.vue";
import Paginator from 'primevue/paginator';
import SelectProductMenu from "../SelectProductMenu.vue";
import ProductBook from "./ProductBook.vue";
import ProductDrink from "./ProductDrink.vue";
import FilterMenuLd from "./filter/FilterMenuLd.vue";


const props = defineProps({
	device: String
});


const SERVER_URL = inject("SERVER_URL");
const products = ref([]);
const currProducts = ref([]);
const productCategory = ref("");
const isLoading = ref(false);
const isEditProduct = ref(false);
let productsBackup = null;


async function selectProduct(p){
	productCategory.value = p;

	products.value = [];
	productsBackup = [];
	currProducts.value = [];

	try{
		isLoading.value = true;
		const options = {
			method: "GET",
		};

		const response = await fetch(`${SERVER_URL}/get-items?type=${productCategory.value}`, options);
		const data = await response.json();
		products.value = data.items;
		productsBackup = JSON.parse(JSON.stringify(data.items));
		currProducts.value = products.value.slice(0, 10);

		isLoading.value = false;
	}
	catch(err){
		console.log(err);
		isLoading.value = false;
	}

}

function handlePages(p){
	currProducts.value = products.value.slice(p.first, p.first + p.rows);
}

function handleFilteredProducts(filteredProducts){
	products.value = filteredProducts.length > 0 ? filteredProducts : productsBackup;
	currProducts.value = products.value.slice(0, 10);
	console.log("test");
}

async function saveChangedProdct(p){
	try{
		const payload = {
			type: `${p.type}s`,
			items: [p]
		};
		const options = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(payload)
		};

		const response = await fetch(`${SERVER_URL}/update-items`, options);
		const data = await response.json();

		console.log(data);
	}
	catch(err){
		console.log(err);
	}
}
</script>


<template>
	<header>
		<h1>
			Edit Products
		</h1>
		
		<SelectProductMenu class="select-product-menu" @selected-product="selectProduct" />
		
		<div v-if="device === 'ld' && products.length > 0" class="filter-container">
			<FilterMenuLd :productCategory="productCategory" :productsBackup="productsBackup" @filtered-products="handleFilteredProducts" />
		</div>
	</header>


		<main>
			<div class="products-container">
				<div v-for="(product, index) in currProducts" :key="index">
					<div v-if="productCategory === 'books'" class="product card-glass">
						<ProductBook :product="product" @changed-product="saveChangedProdct" />
					</div>
			
					<div v-if="productCategory === 'drinks'" class="product card-glass">
						<ProductDrink :product="product" @changed-product="saveChangedProdct" />
					</div>
				</div>
			</div>
		</main>

		<Paginator v-if="productCategory" class="paginator" :rows="10" :totalRecords="products.length" :rowsPerPageOptions="[10, 20, 30]" @page="handlePages"></Paginator>
</template>


<style scoped>
.products-container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	column-gap: 2rem;
	row-gap: 2rem;
}

.product {
	min-height: 48px;
	position: relative;
}

header {
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
}

.filter-container {
	margin-right: auto;
}

main {
	width: 90%;
	display: flex;
	justify-content: space-evenly;
	margin-top: 2dvh;
}

.paginator {
	margin-top: 2dvh;
}
</style>
