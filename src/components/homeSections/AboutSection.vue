<script setup>
import Divider from 'primevue/divider';

</script>


<template>
	<div class="section-container" id="features">
		<header>
			<h1>Features</h1>
		</header>

		<main>
			<div class="container">
				<div class="left card-glass">
					<h1>Add Items and manage them</h1>
					
					<p>
						Lorem eos quis necessitatibus eum dolores culpa. Unde a debitis numquam dolore ipsa voluptatem? 
						Natus odit aperiam corporis quisquam temporibus sapiente Unde voluptates eveniet distinctio quasi ratione veniam Accusamus numquam
					</p>
				</div>
				
				<div class="right">
					<img src="/src/assets/test.jpg" alt="">
				</div>
			</div>
			
			<Divider />
			
			<div class="container">
				<div class="left card-glass">
					<h1>Create and manage orders</h1>
					
					<p>
						Lorem eos quis necessitatibus eum dolores culpa. Unde a debitis numquam dolore ipsa voluptatem? 
						Natus odit aperiam corporis quisquam temporibus sapiente Unde voluptates eveniet distinctio quasi ratione veniam Accusamus numquam
					</p>
				</div>
				
				<div class="right">
					<img src="/src/assets/test.jpg" alt="">
				</div>
			</div>

			<Divider />
			
			<div class="container">
				<div class="left card-glass">
					<h1>Have a view on Statistics</h1>
					
					<p>
						Lorem eos quis necessitatibus eum dolores culpa. Unde a debitis numquam dolore ipsa voluptatem? 
						Natus odit aperiam corporis quisquam temporibus sapiente Unde voluptates eveniet distinctio quasi ratione veniam Accusamus numquam
					</p>
				</div>
				
				<div class="right">
					<img src="/src/assets/test.jpg" alt="">
				</div>
			</div>
		</main>
	</div>
</template>


<style scoped>
header {
	min-height: 15dvh;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

header h1 {
	font-size: 4rem;
}

main {
	min-height: 30dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container {
	width: 100%;
	max-width: 1400px;
	display: flex;
	justify-content: space-evenly;
	gap: 2rem;
	flex-wrap: wrap;
	padding: 8rem 0;
}

.left {
	width: 40%;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 2rem;
	font-size: 1.2rem;
	text-align: center;
}

.right {
	width: 40%;
	min-width: 300px;
}

.right img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media(max-width: 717px) {
	.container {
		padding: 4rem 0;
	}

	header {
		min-height: 10dvh;
	}

	header h1 {
		font-size: 2rem;
	}

	.left {
		font-size: 1rem;
	}

	.left h1 {
		font-size: 1.4rem;
	}
}
</style>
