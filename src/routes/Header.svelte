<script>
	import {page} from '$app/stores';
    import {ArrowRightCircle, Briefcase, HomeModern, ShoppingCart, Star, User} from 'svelte-heros-v2';
    import {
        Button,
        Checkbox,
        Chevron,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Input,
        Label,
        Modal
    } from 'flowbite-svelte'

	let formModal = false;
    let session = true;
</script>

<header class="flex justify-between">
    <a  href="/" class="corner flex ">
        <img alt="pinard" class="w-24 ml-6 hover:!scale-110" src="./src/lib/images/logo.png" width="300px"/><span class="text-white h-14 mt-8 font-serif italic">NEGOSUD</span>
    </a>
    <nav class="text-white flex justify-center relative mt-1">
        <ul class="relative flex justify-center items-center bg-contain list-none">
            <li class="hover:text-white relative h-14 pr-auto  " aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/" class="flex items-center font-black tracking-wider pl-6 pt-4 !text-[18px]"><HomeModern/> Accueil</a></li>
            <li class="hover:text-white relative h-14 pr-auto !text-[18px]" aria-current={$page.url.pathname === '/products' ? 'page' : undefined}>
                <a href="/products" class="flex items-center font-black tracking-wider pl-6 pt-4 !text-[18px]"><Star/> Tous les produits</a></li>
            <li class="hover:text-white relative h-14 pr-auto"><Button class="!bg-transparent !font-black !tracking-wider !pl-6 !pt-4 !text-[18px]">
                <Chevron><ArrowRightCircle/> Type de produits</Chevron>
            </Button></li>
            <Dropdown >
                <DropdownItem><a class="font-bold text-red-900 inline" href="/products"><Star />Nouveautés</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><a class="font-bold" href="/products">Vins rouges</a></DropdownItem>
                <DropdownItem><a class="font-bold" href="/products">Vins blancs</a></DropdownItem>
                <DropdownItem><a class="font-bold" href="/products">Vins Pétillants</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><a class="font-bold" href="/products">Spiritueux</a></DropdownItem>
            </Dropdown>
            <li class="hover:text-white relative h-14 pr-8 "><Button class="!bg-transparent !font-black !tracking-wider !pl-6 !pt-4 !text-[18px]">
                <Chevron><Briefcase/>Pour les professionnels</Chevron>
            </Button></li>
            <Dropdown>
                <DropdownItem><a class="font-bold" href="/contact">Hotellerie</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><a class="font-bold" href="/contact">Vente</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem class="flex items-center justify-between">
                    <Chevron placement="right"><span class="font-bold text-red-900">Producteurs</span></Chevron>
                </DropdownItem>
                <Dropdown placement="right-start">
                    <DropdownItem><a class="font-bold" href="/contact">Vendre votre vin</a></DropdownItem>
                </Dropdown>
            </Dropdown>
        </ul>
    </nav>
    <div class="right flex items-center space-x-4">
        <Button class="tracking-wider relative right-4 mb-6 hover:text-red-200 text-[#CAB089F9] bg-[#5C1427]/50 font-bold" style="height: fit-content; top: 1em; color: white; background: #670302;">
            <ShoppingCart/><a href="/cart">0</a>
        </Button>
        {#if session}
            <Button class="relative right-6 mb-6 text-red-900 bg-black font-bold tracking-wider hover:bg-red-900 hover:text-[#CAB089F9" style="height: fit-content; top: 1em; color: #670302; background:white;"><User/>
                <Chevron></Chevron>
            </Button>
            <Dropdown>
                <DropdownItem><a href="/account"> Mon compte</a></DropdownItem>
                <DropdownItem><a href="/cart">Mon panier</a></DropdownItem>
                <DropdownItem><a href="/account">Commandes</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><a href="" class="font-bold text-red-900">Deconnexion</a></DropdownItem>
            </Dropdown>
        {:else if !session}
        <Button on:click={() => formModal = true} class="relative right-6 mb-6 text-red-900 bg-white font-bold tracking-wider hover:bg-red-900 hover:text-[#CAB089F9] ml-10" style="height: fit-content; top: 1em; color: #670302; background: white;"><User/>
            Connexion
        </Button>
           {/if}
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
       color: #5C1427 !important;
    }
</style>
