<script>
	import { page } from '$app/stores';
	import {User, Envelope, Star, HomeModern, QuestionMarkCircle, ShoppingCart} from 'svelte-heros-v2';

	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte'
	let formModal = false;
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
			<div class="Search">
				<span>Recherchez un produit !</span>
				<div class="searchbar">
					<input type="text" placeholder="Ecrivez le nom d'un produit">
					<button>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
						</svg>
					</button>
				</div>				
			</div>
			<div class="Account">
				<a href="/login">
					<span>Connexion</span>
				</a>
				<img src="src\lib\images\icon-user.png" alt="Avatar">
			</div>			
		  </div>
		  <div class="NavButtons">
			<ul>
				<li>
					<a href="/" class="navButton">Accueil</a>
					<a href="#news" class="navButton">Nos nouveautés</a>
					<a href="/products" class="navButton">Nos produits</a>
					<a href="/about" class="navButton">A propos de nous</a>
				</li>
				<a href="#cart" class="navButton">
					<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
					</svg> -->
					<ShoppingCart/>
					<span>Votre panier</span>
				</a>
			</ul>
		  </div>
		</div>
	  </div>
</header>

<style>	

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

	@font-face {
		font-family: 'Gelasio';
		font-style: normal;
		font-weight: 400;
		src: local('Gelasio Regular'), local('Gelasio-Regular'), url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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

	.Account>a>span{
		color: white;
		font-size: 0.9vw;
	}

	.Search { 
		grid-area: Search; 
		display: flex;
		align-items: center;
	}

	.Search>span{
		color: white;
		font-size: 1.3vw;
		padding: 0 2rem 0 4rem;
		font-weight: 900;
		font-family: BlackList;
	}

	.searchbar{
		display: flex;
		justify-content: space-between;
		padding: 0.2% 1%;
		align-items: center;
		border-radius: 0.5rem;
		width: 50%;
		background-color: white;
		height: 35%;
	}
	.searchbar>input{	
		height: 90%;	
		width: 80%;
		border: none;
		outline: none;
		caret-color: #6D071A;
	}

	.searchbar>input::placeholder{
		font-style: italic;
		color: #9c9c9c;
	}

	.searchbar>button{	
		display: flex;
		align-items: center;
		cursor: pointer;
		width: 5%;
		border: none;
		background-color: transparent;
	}

	.searchbar>button>svg:hover{
		fill: #490310;
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

	.NavButtons>ul>a>svg{
		fill: white;
		height: 70%;
	}

	.NavButtons>ul>li{
		float: left;
		display: flex;
	}

	.navButton{
		color: white;
		text-align: center;
		padding: 1rem 2rem;
		text-decoration: none;
		font-size: 0.8vw;
	}	
	
	.navButton:hover{
		background-color:#490310;
	}

</style>
