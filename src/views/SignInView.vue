<script setup>
import {reactive, ref, inject} from "vue";
import {useRouter} from "vue-router";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import {userStore} from "../store/store.js";
import ProgressSpinner from "../components/utils/ProgressSpinner.vue";

const SERVER_URL = inject("SERVER_URL");
const router = useRouter();
const errMsg = ref("");
const isInProgress = ref(false);
const credentials = reactive({
	nameOrEmail: "",
	password: ""
});

async function signIn(){
	isInProgress.value = true;
	const json = JSON.stringify(credentials);
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: json
	};

	try{
		const response = await fetch(`${SERVER_URL}/sign-in`, options);
		const data = await response.json();

		if(!response.ok){
			isInProgress.value = false;
			return errMsg.value = data.msg;
		}

		localStorage.setItem("token", data.token);
		userStore.isSignedIn = true;
		isInProgress.value = false;
		router.push("/dashboard");
	}
	catch(err){
		console.log(err);
	}
}
</script>

<template>
	<div class="container">
		<div class="form card-glass">
			<ProgressSpinner v-if="isInProgress" />

			<header>
				<h1>Sign in</h1>
			</header>

			<main>
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-user"></i>
					</InputGroupAddon>
					<FloatLabel>
						<InputText id="nameOrEmail" v-model="credentials.nameOrEmail" />
						<label for="nameOrEmail">Username or E-Mail</label>
					</FloatLabel>	
				</InputGroup>
				
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-lock"></i>
					</InputGroupAddon>
					<FloatLabel>
						<InputText type="password" id="password" v-model="credentials.password" />
						<label for="password">Password</label>
					</FloatLabel>	
				</InputGroup>
			</main>

			<footer>
				<div class="err-msg">{{errMsg}}</div>

				<Button label="Sign in" @click="signIn" />
				
				<span>
					<span style="color: var(--p-text-muted-color">
						Don't have an account? 					
					</span>
					<Button as="router-link" to="sign-up" label="Sign up" link icon="pi pi-arrow-right" iconPos="right" /> 
				</span>
			</footer>
		</div>
	</div>
</template>


<style scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form {
	width: 90%;
	max-width: 600px;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 10dvh;
}

.form header {
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.form main {
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.form footer {
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}

.form footer :last-child {
	text-decoration: none;
	padding: 0px;
}
</style>
