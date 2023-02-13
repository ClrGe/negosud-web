<script>
    import {page} from '$app/stores';
    import {ArrowRightCircle, Briefcase, HomeModern, ShoppingCart, Star, User} from 'svelte-heros-v2';
    import {Button, Chevron, Dropdown, DropdownDivider, DropdownItem, Modal} from 'flowbite-svelte'
    import Cart from "$lib/Cart/Cart.svelte";
    import {cart, session} from "../stores/stores.js";
    import Login from "$lib/Forms/Login.svelte";
    import {goto} from "$app/navigation";

    let loginModal  = false,
            cartModal   = false,
            cart_sum    = 0,
            appTitle    = "negosud",
            src         = "src/lib/img/logo.png";

    let sessionValue;

    const unsubscribe = cart.subscribe(items => {
        const itemValues = Object.values(items);
        cart_sum = 0;
        itemValues.forEach(item => {
            cart_sum += item.count;
        });
        session.subscribe(value => {
            sessionValue = value;
        });
    });

    function disconnectUser() {
        session.set('false');
    }

    function reloadComponent() {
        goto($page.url.pathname);
    }

</script>

<header class="flex justify-between">
    <a class="corner flex " href="/">
        <img {src} alt={appTitle} class="w-24 ml-6 hover:!scale-110"  width="300px"/>
        <span class="text-white h-14 mt-8 font-serif italic">{appTitle.toUpperCase()}</span>
    </a>
    <nav class="text-white flex justify-center relative mt-1">
        <ul class="relative flex justify-center items-center bg-contain list-none">
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}
                class="hover:text-white relative h-14 pr-auto  ">
                <a class="flex items-center font-black tracking-wider pl-6 pt-4 !text-[18px]" href="/">
                    <HomeModern/>
                    Accueil
                </a>
            </li>
            <li aria-current={$page.url.pathname === '/products' ? 'page' : undefined}
                class="hover:text-white relative h-14 pr-auto !text-[18px]">
                <a class="flex items-center font-black tracking-wider pl-6 pt-4 !text-[18px]" href="/products">
                    <Star/>
                    Tous les produits
                </a>
            </li>
            <li class="hover:text-white relative h-14 pr-auto">
                <Button class="!bg-transparent !font-black !tracking-wider !pl-6 !pt-4 !text-[18px]">
                    <Chevron>
                        <ArrowRightCircle/>
                        Type de produits
                    </Chevron>
                </Button>
            </li>
            <Dropdown>
                <DropdownItem><a class="font-bold text-red-900 inline" href="/products">
                    <Star/>
                    Nouveautés</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><a class="font-bold" href="/products?type=Rouge">Vins rouges</a></DropdownItem>
                <DropdownItem><a class="font-bold" href="/products?type=Blanc">Vins blancs</a></DropdownItem>
                <DropdownItem><a class="font-bold" href="/products?type=Petillant">Vins Pétillants</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><a class="font-bold" href="/products?type=spirit">Spiritueux</a></DropdownItem>
            </Dropdown>
            <li class="hover:text-white relative h-14 pr-8 ">
                <Button class="!bg-transparent !font-black !tracking-wider !pl-6 !pt-4 !text-[18px]">
                    <Chevron>
                        <Briefcase/>
                        Pour les professionnels
                    </Chevron>
                </Button>
            </li>
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
<!--        <form class="mt-6">-->
<!--            <div class="relative">-->
<!--                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">-->
<!--                    <svg aria-hidden="true" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>-->
<!--                </div>-->
<!--                <input type="search" id="search" class="block text-white w-full p-2 pl-10 text-sm border !border-gray-300 rounded-lg !bg-black/50 focus:!ring-red-980 focus:!border-red-980" placeholder="Rechercher" required>-->
<!--                <button type="submit" class="text-xs absolute right-2.5 bottom-1.5 bg-red-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>-->
<!--            </div>-->
<!--        </form>-->
    </nav>
    <div class="right flex items-center space-x-4">
        <a href="/cart">
            <Button class="tracking-wider relative right-4 mb-6 hover:text-red-200 text-[#CAB089F9] bg-[#5C1427]/50 font-bold" style="height: fit-content; top: 1em; color: white; background: #670302;">
                <!--on:click={() => cartModal = true}-->
                <ShoppingCart/>{cart_sum}
            </Button>
        </a>
        {#if sessionValue === 'true' }
            <Button class="relative right-6 mb-6 text-red-900 bg-black font-bold tracking-wider hover:bg-red-900 hover:text-[#CAB089F9" style="height: fit-content; top: 1em; color: #670302; background:white;">
                <User/>
                <Chevron></Chevron>
            </Button>
            <Dropdown>
                <DropdownItem><a href="/account"> Mon compte</a></DropdownItem>
                <DropdownItem><a href="/cart">Mon panier</a></DropdownItem>
                <DropdownItem><a href="/account">Commandes</a></DropdownItem>
                <DropdownDivider/>
                <DropdownItem><Button href="" class="font-bold text-red-900 !bg-transparent" on:click={disconnectUser}>Deconnexion</Button></DropdownItem>
            </Dropdown>
        {:else}
<!--            <Button on:click={() => loginModal = true}-->
            <a href="/login"><Button  class="relative right-6 mb-6 text-red-900 bg-white font-bold tracking-wider hover:bg-red-900 hover:text-[#CAB089F9] " style="height: fit-content; top: 1em; color: #670302; background: white;">
                <User/>
                Connexion
            </Button></a>
        {/if}
        <Modal autoclose={false} bind:open={loginModal} class="w-full" size="xs">
            <form  action="#" class="flex flex-col space-y-6">
                 <Login/>
            </form>
        </Modal>
        <Modal autoclose={true} bind:open={cartModal} class="w-full" size="xs">
            <Cart/>
            <div class="mt-4 flex justify-center items-center">
                <Button class="w-1/2 ml-auto mr-auto px-6 py-2 !text-white !bg-red-900 hover:!bg-black" on:click={cartModal === false}>
                    <a href="/payment" on:click={cartModal === false}>Procéder au paiement</a>
                </Button>
            </div>
        </Modal>
    </div>
</header>

<style>
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
