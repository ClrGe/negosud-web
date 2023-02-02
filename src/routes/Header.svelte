<script>
	import { page } from '$app/stores';
	import {User, Envelope, Star, HomeModern, QuestionMarkCircle} from 'svelte-heros-v2';

	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte'
	let formModal = false;
</script>

<header>
	<div class="corner">
		<img class="image" width="300px" src="./src/lib/images/logo.png" alt="pinard"/>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/"><HomeModern />Accueil</a>
			</li>
			<li aria-current={$page.url.pathname === '/products' ? 'page' : undefined}>
				<a href="/products"><Star /> Nos produits</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about"><QuestionMarkCircle /> À propos de nous</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined} >
				<a href="/contact"><Envelope /> Contact</a>
			</li>
			<li aria-current={$page.url.pathname === '/account' ? 'page' : undefined} >
				<a href="/account">	<User /> Mon compte</a>
			</li>
		</ul>

	</nav>

	<Button class="relative right-0 btn" style="background :#5C1427; height: fit-content; top: 1em;" on:click={() => formModal = true}>
		<User /> Connexion
	</Button>
		<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
			<form class="flex flex-col space-y-6" action="#">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Merci de vous identifier</h3>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" name="email" placeholder="exemple@negosud.fr" required />
				</Label>
				<Label class="space-y-2">
					<span>Mot de passe</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<div class="flex items-start">
					<Checkbox>Se souvenir de moi</Checkbox>
					<a href="/" class="ml-auto text-sm text-red-700 hover:underline dark:text-red-500">Mot de passe oublié ?</a>
				</div>
				<Button type="submit" class="w-full1" style="background :#670302">Se connecter</Button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
					Pas encore inscrit ? <a href="/" class="hover:underline dark:text-red-500" style="color :#670302">S'inscrire</a>
				</div>
			</form>
		</Modal>
</header>
<div class="subheader">
</div>

<style>
	@font-face {
		font-family: 'Gelasio';
		font-style: normal;
		font-weight: 400;
		src: local('Gelasio Regular'), local('Gelasio-Regular'), url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	header {
		display: flex;
		justify-content: space-between;
		background: white;

	}
	.subheader {
		height: 20px;
		background: black;}

	.corner {
		width: 5em;
		height: 5em;
	}

	.corner img {
		width: 5em;
		height: 5em;
		position: relative;
		left: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		position: relative;
		top:1em;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid #5C1427;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #5C1427;
	}
</style>
