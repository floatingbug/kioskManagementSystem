<script setup>
</script>


<template>
	<div class="section-container">
		<header>
			<h1>Kios Management System</h1>
		</header>

		<main>
			<div class="description">
				<p>
					Sit iusto dolor perferendis reiciendis fugit Quod repellat et est placeat aliquam, voluptatum! 
					Quam tempore rerum minima ducimus ex asperiores obcaecati, quaerat? Assumenda iste odit amet totam ex dolorum odit?
				</p>
			</div>
		</main>

		<footer>
			<Button as="a" href="#features" label="Features" size="large" severity="info" />
		</footer>
	</div>

</template>


<style scoped>
.section-container {
	height: 100dvh;
	border-bottom: 1px solid var(--p-primary-500);
}

header {
	min-height: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
}

header h1 {
	font-size: 8rem;
	text-align: center;
	color: var(--p-primary-500);
}

main {
	height: 20%;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--p-text-muted-color);
}

main .description {
	width: 80%;
	font-size: 2rem;
	text-align: center;
}

footer {
	display: flex;
	align-items: flex-start;
	justify-content: center;
}

footer .p-button {
	text-decoration: none;
}

@media(max-width: 1175px) {
	header {
	}

	header h1 {
		font-size: 5rem;
	}
	
	main .description {
		font-size: 1.4rem;
	}
}

@media(max-width: 722px) {
	header {
	}

	header h1 {
		font-size: 2.5rem;
	}

	main .description {
		font-size: 1.2rem;
	}
}
</style>
