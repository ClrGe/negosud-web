<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
	import {Envelope, QuestionMarkCircle} from "svelte-heros-v2";
	import {page} from "$app/stores";
</script>

<div class="app flex flex-col bg-center repeat absolute top-0 w-full h-screen bg-black">
	<Header />

	<main class="flex flex-col w-full">
		<slot />
	</main>
	<div class="flex justify-center items-center">
	<a target="_blank" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006688014" class="text-[#CAB089F9]">L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.</a>
</div>
	<footer class="flex flex-col  text-white">
		<ul class="relative  bg-contain list-none flex justify-center ">
			<li class=" p-3 o" aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about" class="font-black tracking-wider">À propos de Negosud</a></li>
			<li class="p-3">
				<a href="/contact" class="font-black  tracking-wider ">Nous contacter</a></li>
			<li flex items-center justify-center>
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
