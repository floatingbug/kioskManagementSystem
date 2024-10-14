<script setup>
import { ref } from "vue";
import Menu from 'primevue/menu';
import {userStore} from "../../store/store.js";

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Sign out',
                icon: 'pi pi-sign-out',
				command: signOut
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

function signOut(){
	localStorage.setItem("token", "");
	userStore.isSignedIn = false;
}
</script>


<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-user" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" size="large" text />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>
