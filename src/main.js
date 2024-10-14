import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import {definePreset} from "@primevue/themes";
import semantic from "./theme/semantic.js";
import components from "./theme/components.js";
import Button from "primevue/button";

//const SERVER_URL = "http://localhost:3000"
const SERVER_URL = "http://194.195.241.51:3301"

const app = createApp(App);

const MyPreset = definePreset(Aura, {
	semantic,
	components,
});

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: MyPreset, 
		options: {
			darkModeSelector: ".dark-mode"
		}
    },
});

app.component("Button", Button);

app.provide("SERVER_URL", SERVER_URL);

app.mount('#app')
