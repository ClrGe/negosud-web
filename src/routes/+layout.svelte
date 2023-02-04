<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
	import {QuestionMarkCircle} from "svelte-heros-v2";
	import {page} from "$app/stores";
</script>

<div class="app flex flex-col bg-center repeat absolute top-0 w-full h-screen bg-black">
	<Header />

	<main class="flex flex-col w-full">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center text-white">
		<ul class="relative  bg-contain list-none">
			<li class="hover:text-red-200 relative h-14" aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about" class="flex items-center justify-center font-black tracking-wider"><QuestionMarkCircle/>À propos de Negosud</a>
			</li>
			<li>
				<p class="text-[#CAB089F9]">L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.</p>
				<!--<img src="src/lib/images/bandeau_legal.jpg">-->
			</li>
		</ul>
	</footer>
</div>

<style>
	html {
		background: black;
	}
	.app {
		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("src/lib/images/hero.png");
		background-attachment: scroll;
	}

	main {
		flex: 1;
		margin: 0 auto;

		box-sizing: border-box;

	}
footer {
	background: linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0));

}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
