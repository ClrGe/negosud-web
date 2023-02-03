<script>
	/** @type {import('../../../../.svelte-kit/types/src/routes').PageLoad} */
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';
	import {User, Envelope, Star, HomeModern, QuestionMarkCircle, ShoppingCart} from 'svelte-heros-v2';
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte'
	import { createEventDispatcher } from 'svelte';	
	import * as cookie from 'cookie';

	let formModal = false;

	let email = "";
	let password = "";
	let error;

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', {
		email,
		password
		});
		login();
	}

	
async function login() {
    let url = env.PUBLIC_API_URL + "/api/Authentication/Login";
	let model = JSON.stringify({email, password});
    const response = await fetch(url, {
    method: 'POST',
    body: model,
    headers: {
        'Content-Type': 'application/json',
    },
	credentials: 'include',
    });
	if (!response.ok) {
    error = (await response.json()).message;
    return;
    }
    const data = await response.json();

	const token = document.cookie.split("=")[1];	
}
</script>

<header>
	<div class="Negosud">
		<div class="Logo">
		  <div class="Img">
			<a href="/">
				<img src="src\lib\images\logo.png" alt="Negosud">
			</a>	
		  </div>
		  <div class="Title">
			<span>NEGOSUD</span>
		  </div>
		</div>
		<div class="Nav">
		  <div class="Utilities">
			<div class="Search flex items-center">
				<span>Recherchez un produit !</span>
				<div class="searchbar flex justify-between items-center w-1/2 h-2/6 bg-white">
					<input class="border-transparent focus:border-transparent focus:ring-0 border-none h-5/6 w-4/5 placeholder:italic " type="text" placeholder="Ecrivez le nom d'un produit">
					<button class="flex items-center border-none bg-transparent cursor-pointer p-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
						</svg>
					</button>
				</div>				
			</div>
			<div class="Account">
				<Button style="background: transparent" on:click={() => formModal = true}>
					<span>Connexion</span>
				</Button>
				<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
					<form on:submit={submit} class="flex flex-col space-y-6">
						<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Merci de vous identifier</h3>
						<Label class="space-y-2">
							<span>Email</span>
							<Input type="email" name="email" placeholder="exemple@negosud.fr" bind:value={email} required />
						</Label>
						<Label class="space-y-2">
							<span>Mot de passe</span>
							<Input type="password" name="password" placeholder="•••••" bind:value={password} required />
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
				<img src="src\lib\images\icon-user.png" alt="Avatar">
			</div>			
		  </div>
		  <div class="NavButtons">
			<ul>
				<li>
					<a href="/" class="navButton"><HomeModern class="px-2 w-2/4"/>Accueil</a>
					<a href="#news" class="navButton"><Star class="px-2 w-2/4"/>Nos nouveautés</a>
					<a href="/products" class="navButton">Nos produits</a>
					<a href="/about" class="navButton"><QuestionMarkCircle class="px-2 w-1/4"/>A propos de nous</a>
					<a href="#contact" class="navButton"><Envelope class="px-2 w-1/4"/>A propos de nous</a>
				</li>
				<a href="/cart" class="navButton">
					<ShoppingCart/>
					<span>Votre panier</span>
				</a>
			</ul>
		  </div>
		</div>
	  </div>
</header>

<style>	

	@font-face {
		font-family: 'Gelasio';
		font-style: normal;
		font-weight: 400;
		src: local('Gelasio Regular'), local('Gelasio-Regular'), url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	.Negosud {  
		display: grid;
		grid-template-columns: 0.4fr 1.6fr;
		grid-template-rows: 1.4fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: "Logo Nav";
		background-color: #6D071A;
	}

	.Logo {  
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: "Img Title";
		grid-area: Logo;
	}

	.Img { 
		grid-area: Img; 
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10% 0 10% 10%;
	}

	.Img>a>img{
		max-width: 80%;
		max-height: 80%;
	}

	.Title { 
		grid-area: Title; 
		display: flex;
		align-items: center;
	}

	.Title>span{
		font-size: 1.4vw;
		color: white;
		font-weight: 900;
		font-family: Gelasio;
	}

	.Nav {  
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1.2fr 0.8fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: "Utilities" "NavButtons";
		grid-area: Nav;
	}

	.Utilities {  
		display: grid;
		grid-template-columns: 1.7fr 0.3fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: "Search Account";
		grid-area: Utilities;
	}

	.Account { 
		grid-area: Account; 
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Account>img{
		margin-left: 7%;
		border-radius: 50%;
		max-height: 40%;
		max-width: 40%;
		background-color: lightgray;
		border: 1px solid white;
		display: inline-block;
	}

	.Search { 
		grid-area: Search; 
	}

	.Search>span{
		color: white;
		font-size: 1.3vw;
		padding: 0 2rem 0 4rem;
		font-weight: 900;
		font-family: Gelasio;
	}	

	.searchbar{
		padding: 0.2% 1%;
		border-radius: 0.5rem;
	}

	.searchbar>input{	
		caret-color: #6D071A;
	}

	.searchbar>button>svg:hover{
		fill: #490310;
	}

	.searchbar>button{	
		width: 5%;
	}

	.searchbar>input::placeholder{
		color: #9c9c9c;
	}

	.NavButtons { 
		grid-area: NavButtons; 
		padding: 0 0 0 2rem;		
	}

	.NavButtons>ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;	
		border-left: 1px solid white;
		border-top: 1px solid white;	
		display: flex;
		justify-content: space-between;
	}

	.NavButtons>ul>a{
		display: flex;
		align-items: center;
	}

	.NavButtons>ul>a>span{
		white-space:nowrap;
		margin-left: 5%;
	}

	.NavButtons>ul>li{
		float: left;
		display: flex;
	}

	.navButton{
		display: flex;
		align-items: center;
		color: white;
		text-align: center;
		padding: 1rem 2rem;
		text-decoration: none;
		font-size: 0.8vw;
		white-space: nowrap	;
	}	
	
	.navButton:hover{
		background-color:#490310;
	}

</style>
