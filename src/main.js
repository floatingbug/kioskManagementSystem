import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import Nora from "@primevue/themes/nora";
import {definePreset} from "@primevue/themes";
import Button from "primevue/button";

const SERVER_URL = "http://localhost:3000"

const app = createApp(App);

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Nora
    }
});

app.component("Button", Button);

app.provide("SERVER_URL", SERVER_URL);

app.mount('#app')
