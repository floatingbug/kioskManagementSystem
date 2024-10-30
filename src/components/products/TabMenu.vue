<script setup>
import { ref } from "vue";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const emit = defineEmits();

const items = ref([
	{
		route: "edit",
		label: "Edit Products",
		icon: "pi pi-home"
	},
	{
		route: "add",
		label: "Add Products",
		icon: "pi pi-home"
	},
	{
		route: "delete",
		label: "Delete Products",
		icon: "pi pi-home"
	},
]);

function switchMenu(e){
	emit("tabMenuChange", e);
}
</script>

<template>
    <div class="card">
        <Tabs value="edit" @update:value="switchMenu">
            <TabList>
                <Tab class="menu-button" v-for="tab in items" :key="tab.label" :value="tab.route">
					<i :class="tab.icon"></i>
					<span>{{ tab.label }}</span>
                </Tab>
            </TabList>
        </Tabs>
    </div>
</template>

<style scoped>
.menu-button {
	display: flex;
	align-items: center;
	gap: 1rem;
}

:deep(.p-tablist-tab-list) {
	justify-content: center;
}
</style>
