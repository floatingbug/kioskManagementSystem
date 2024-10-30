<script setup>
import {reactive, ref, inject, computed} from "vue";
import {useRouter} from "vue-router";
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import ProgressSpinner from "../components/utils/ProgressSpinner.vue";

const router = useRouter();
const SERVER_URL = inject("SERVER_URL");
const errMsg = ref("");
const isProgress = ref(false);
const showMsg = ref(false);
const isEveryFieldFilled = computed(() => {
	return credentials.name && credentials.email && credentials.password ? true : false;
});
const credentials = reactive({
	name: "",
	email: "",
	password: ""
});


async function signUp(){
	isProgress.value = true;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: credentials.name,
			email: credentials.email,
			password: credentials.password
		}),
	};

	let signUpResult = null;
	try{
		const response = await fetch(`${SERVER_URL}/sign-up`, options);
		signUpResult = await response.json();
	}
	catch(err){
		console.log(err);
	}

	if(!signUpResult.success) {
		errMsg.value = signUpResult.msg;
		isProgress.value = false;
		return
	}

	isProgress.value = false;
	showMsg.value = true;
}
</script>

<template>
	<div class="container">
		<div class="form card-glass">
			<ProgressSpinner v-if="isProgress" />

			<div v-if="showMsg" class="confirm-email-msg card-glass">
				<span>Please confirm your e-mail address.</span>
			</div>

			<header>
				<h1>Sign up</h1>
			</header>

			<main>
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-user"></i>
					</InputGroupAddon>
					<FloatLabel>
						<InputText id="name" v-model="credentials.name" />
						<label for="name">Username</label>
					</FloatLabel>	
				</InputGroup>
				
				<InputGroup>
					<InputGroupAddon>
						<i class="pi pi-envelope"></i>
					</InputGroupAddon>
					<FloatLabel>
						<InputText id="email" v-model="credentials.email" />
						<label for="email">E-Mail</label>
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
				<div v-if="errMsg" class="err-msg">{{errMsg}}</div>

				<Button label="Sign up" @click="signUp" :disabled="!isEveryFieldFilled" />

				<span>
					<span style="color: var(--p-text-muted-color">
						Have a accound? 					
					</span>
					<Button as="router-link" to="sign-in" label="Sign in" link icon="pi pi-arrow-right" iconPos="right" /> 
				</span>
			</footer>
		</div>
	</div>
</template>


<style scoped>
.container {
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form {
	width: 90%;
	max-width: 600px;
	height: 500px;
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: 10dvh;
}

.form header {
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.form main {
	height: 60%;
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

.confirm-email-msg {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}
</style>
