<script>
    import {page} from '$app/stores';
    import {ArrowRightCircle, Briefcase, Cog, HomeModern, ShoppingCart, Star, User} from 'svelte-heros-v2';
    import {
        Button,
        Chevron,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Modal,
        Navbar,
        NavBrand, NavHamburger, NavLi,
        NavUl
    } from 'flowbite-svelte'
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


</script>

<header class=" flex justify-between w-full">
    <Navbar let:hidden let:toggle class="!text-white  !bg-transparent  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">

    <NavBrand class="corner flex left-0 ml-0 px-0 sm:mr-auto sm:ml-auto md:mr-auto md:ml-auto" href="/">
        <img {src} alt={appTitle} class="w-24 hover:!scale-110 "  width="300px"/>
        <span class="text-white h-14 mt-8 font-serif italic desktop ">{appTitle.toUpperCase()}</span>
    </NavBrand>
        <NavUl class=" desktop relative flex justify-center items-center bg-contain list-none">
            <NavLi aria-current={$page.url.pathname === '/' ? 'page' : undefined}
                class="  !text-white relative h-14 pr-auto  ">
                <a class="desktop max-w-md sm:!hidden md:!hidden flex items-center font-black tracking-wider pl-6 pt-4 !text-[18px]" href="/">
                    <HomeModern/>
                    Accueil
                </a>
            </NavLi>
            <NavLi aria-current={$page.url.pathname === '/products' ? 'page' : undefined}
                class="!text-white relative h-14 pr-auto !text-[18px]">
                <a class="desktop flex items-center font-black tracking-wider pl-6 pt-4 !text-[18px]" href="/products">
                    <Star/>
                    Tous les produits
                </a>
            </NavLi>
            <NavLi class="!text-white relative h-14 pr-auto">
                <div class="desktop"><Button class="!desktop !bg-transparent !font-black !tracking-wider !pl-6 !pt-4 !text-[18px]">
                    <Chevron>
                        <ArrowRightCircle/>
                        Type de produits
                    </Chevron>
                </Button></div>
            </NavLi>
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
            <NavLi class=" !md:hidden !sm:hidden min-w-56 hover:text-white relative h-14 pr-8 ">
                <div class="desktop"><Button class="!bg-transparent !font-black !tracking-wider !pl-6 !pt-4 !text-[18px]">
                    <Chevron>
                        <Briefcase/>
                        Pour les professionnels
                    </Chevron>
                </Button></div>
            </NavLi>
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
        </NavUl>
        <div class="">
    <div class="right flex items-center space-x-4 desktop ">
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
                <Button class="w-1/2 ml-auto mr-auto  !text-white !bg-red-900 hover:!bg-black" on:click={cartModal === false}>
                    <a href="/payment" on:click={cartModal === false}>Procéder au paiement</a>
                </Button>
            </div>
        </Modal>
    </div>
</div>
            <NavHamburger class="!md:hidden !sm:hidden"/>
    </Navbar>

</header>

<style>

     header {
        background: linear-gradient(rgb(0 0 0), rgb(0 0 0 / 0%));
    }

     @media (max-width: 768px) {
         .desktop {
             visibility: hidden;
         }
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
