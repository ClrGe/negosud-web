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
				<Button type="submit" class="w-full1 bg-red-600 ">Se connecter</Button>
				<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
					Pas encore inscrit ? <a href="/" class="text-blue-700 hover:underline dark:text-red-500">S'inscrire</a>
				</div>
			</form>
		</Modal>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: white;
	}

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
