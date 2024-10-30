<script setup>
import {ref} from "vue";
import InputText from "primevue/inputtext";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';


const props = defineProps({
	product: Object
});

const emit = defineEmits(["changed-product"]);


const productSaved = JSON.parse(JSON.stringify(props.product));
const isEditing = ref(false);


function saveChanges(){
	emit("changed-product", props.product);
	isEditing.value = false;
}

function cancelChanges(){
	props.product.value = JSON.parse(JSON.stringify(productSaved));
	isEditing.value = false;
}
</script>

<template>
	<div v-if="!isEditing" class="show-product">
		<Button class="edit-button" label="Edit" text @click="isEditing = !isEditing" />

		<div class="product-attribute">
			<span>Author:</span> <span>{{product.productName}}</span>
		</div>

		<div class="product-attribute">
			<span>Genre:</span> <span>{{product.content}}</span>
		</div>

		<div class="product-attribute">
			<span>Stock:</span> <span>{{product.stock}}</span>
		</div>

		<div class="product-attribute">
			<span>Price:</span> <span>{{product.price}}</span>
		</div>
	</div>
	
	<div v-if="isEditing" class="edit-product">
		<h2 style="padding-bottom: 2rem;">Edit mode</h2>

		<InputGroup>
			<InputGroupAddon>
				<i class="pi pi-user"></i>
			</InputGroupAddon>

			<FloatLabel variant="on">
				<InputText id="author" v-model="product.author" />
				<label for="author">Author</label>
			</FloatLabel>
		</InputGroup>

		<InputGroup>
			<InputGroupAddon>
				<i class="pi pi-video"></i>
			</InputGroupAddon>

			<FloatLabel variant="on">
				<InputText id="genre" v-model="product.genre" />
				<label for="genre">Genre</label>
			</FloatLabel>
		</InputGroup>

		<InputGroup>
			<InputGroupAddon>
				<i class="pi pi-warehouse"></i>
			</InputGroupAddon>

			<FloatLabel variant="on">
				<InputText id="stock" v-model="product.stock" />
				<label for="stock">Stock</label>
			</FloatLabel>
		</InputGroup>

		<InputGroup>
			<InputGroupAddon>
				<i class="pi pi-dollar"></i>
			</InputGroupAddon>

			<FloatLabel variant="on">
				<InputText id="price" v-model="product.price" />
				<label for="price">Price</label>
			</FloatLabel>
		</InputGroup>

		<div class="edit-buttons">
			<Button label="Save changes" text @click="saveChanges" />
			<Button label="Cancel" text @click="cancelChanges" />
		</div>
	</div>
</template>

<style scoped>
.product-attribute {
	display: flex;
}

.product-attribute>* {
	flex: 1;
}

.show-product {
	max-width: 300px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.edit-product {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.edit-button {
	margin-left: auto;
}

.edit-buttons{
	margin-left: auto;
}

.p-inputgroupaddon {
	padding: 0 1rem;
}
</style>
