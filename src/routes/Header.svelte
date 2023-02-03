<script>
	import {page} from '$app/stores';
	import {Envelope, HomeModern, ShoppingCart, Star, User} from 'svelte-heros-v2';
	import {Button, Checkbox, Input, Label, Modal} from 'flowbite-svelte'

	let formModal = false;
</script>

<header class="flex justify-between">
    <a  href="/" class="corner">
        <img alt="pinard" class="w-20 ml-6" src="./src/lib/images/logo.png" width="300px"/>
    </a>
    <nav class="text-white flex justify-center relative mt-1">
        <ul class="relative flex justify-center items-center bg-contain list-none">
            <li class="hover:text-white relative h-14" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/" class="flex items-center font-black tracking-wider pl-6 pt-4"><HomeModern/>Accueil</a></li>
            <li class="hover:text-white relative h-14" aria-current={$page.url.pathname === '/products' ? 'page' : undefined}>
                <a href="/products" class="flex items-center font-black tracking-wider pl-6 pt-4"><Star/>Nos produits</a></li>
            <li class="hover:text-white relative h-14" aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
                <a href="/contact" class="flex items-center font-black  tracking-wider pl-6 pt-4"><Envelope/>Contact</a></li>
            <li class="hover:text-white relative h-14" aria-current={$page.url.pathname === '/account' ? 'page' : undefined}>
                <a href="/account" class="flex items-center font-black tracking-wider pl-6 pt-4"><User/>Mon compte</a>
            </li>
        </ul>
    </nav>
    <div class="right flex items-center space-x-4">
        <Button class="tracking-wider relative right-4 mb-6 hover:text-red-200 text-[#CAB089F9] bg-[#5C1427]/50 font-bold" style="height: fit-content; top: 1em;">
            <ShoppingCart/>Panier
        </Button>
        <Button class="relative right-6 mb-6 text-red-900 bg-white font-bold tracking-wider hover:bg-red-900 hover:text-[#CAB089F9]" on:click={() => formModal = true} style="height: fit-content; top: 1em;"><User/>
            Connexion
        </Button>
        <Modal autoclose={false} bind:open={formModal} class="w-full" size="xs">
            <form action="#" class="flex flex-col space-y-6">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Merci de vous identifier</h3>
                <Label class="space-y-2">
                    <span>Email</span>
                    <Input name="email" placeholder="exemple@negosud.fr" required type="email"/>
                </Label>
                <Label class="space-y-2">
                    <span>Mot de passe</span>
                    <Input name="password" placeholder="•••••" required type="password"/>
                </Label>
                <div class="flex items-start">
                    <Checkbox>Se souvenir de moi</Checkbox>
                    <a class="ml-auto text-sm text-red-700 hover:underline dark:text-red-500" href="/">Mot de passe oublié ?</a>
                </div>
                <Button class="w-full1" style="background :#670302" type="submit">Se connecter</Button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Pas encore inscrit ? <a class="hover:underline dark:text-red-500" href="/" style="color :#670302">S'inscrire</a>
                </div>
            </form>
        </Modal>
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

    header {
        background: linear-gradient(rgb(0 0 0), rgb(0 0 0 / 0%));


    }

    li[aria-current='page']::before {
        --size: 6px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(60% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid white;
        color: white;
    }

</style>
