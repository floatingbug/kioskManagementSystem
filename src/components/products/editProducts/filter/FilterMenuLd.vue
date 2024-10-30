<script setup>
import {ref, reactive, watch} from "vue";
import InputText from "primevue/inputtext";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from "primevue/floatlabel";
import {filterByName} from "./filter.js";


const props = defineProps({
	productCategory: String,
	productsBackup: Object
});
const emit = defineEmits();


const filterInputs = reactive({});
let changedProp= null;
let previousFilterInputs = null;
let filteredProducts = null;


//initialize filter if products have received from server
watch(() => props.productsBackup, (newVal) => {
	const productKeys = Object.keys(props.productsBackup[0]);

	for(let key of productKeys){
		if(key === "type" || key === "_id" || key === "note") continue;

		filterInputs[key] = "";
	}
});

//filter by name
watch(filterInputs, (newVal) => {
	filteredProducts = filterByName(filterInputs, props.productsBackup);

	emit("filteredProducts", filteredProducts);
});


</script>


<template>
	<div v-if="props.productCategory === 'books'" class="filters-container card-glass">
		<h1>Filter</h1>

		<div class="filters">
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-user"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText id="author" v-model="filterInputs.author" />
					<label for="author">Author</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-video"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText id="genre" v-model="filterInputs.genre" />
					<label for="genre">Genre</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-warehouse"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText id="stock" v-model="filterInputs.stock" />
					<label for="stock">Stock</label>
				</FloatLabel>
			</InputGroup>
			
			<InputGroup>
				<InputGroupAddon>
					<i class="pi pi-dollar"></i>
				</InputGroupAddon>
			
				<FloatLabel>
					<InputText id="price" v-model="filterInputs.price" />
					<label for="price">Price</label>
				</FloatLabel>
			</InputGroup>
		</div>
	</div>
</template>


<style scoped>
.filters-container {
	display: flex;
	gap: 2rem;
}

.filters {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}

.filters>* {
	min-width: 300px;
	max-width: 300px;
}
</style>
