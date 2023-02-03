<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<div class="header">
		<Header />
	</div>	

	<main>
		<slot />
	</main>

	<footer>
		<p>N&#xe9;gociant en pinard depuis 2023</p>
	</footer>
</div>

<style>

	.header{
		box-shadow: 1px 1px 10px 5px black;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100rem;
		margin: 10% auto 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
