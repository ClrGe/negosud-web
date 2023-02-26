<script>
    import {page} from '$app/stores';
    import {cart, session} from "../stores/stores.js";

    import {
        ArrowRightCircle,
        Briefcase,
        HomeModern,
        ShoppingCart,
        Star,
        User,
    } from 'svelte-heros-v2';

    import {
        Button,
        Chevron,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Navbar,
        NavBrand, NavHamburger,
        NavLi,
        NavUl
    } from 'flowbite-svelte'

    let cart_sum    = 0,
        appTitle    = "negosud",
        src         = "/img/logo.png",
        sessionValue;

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
        localStorage.removeItem("token")
    }

</script>
<div class="!w-full !bg-transparent flex !justify-around items-start">
    <Navbar class="!bg-black/60 !text-white !w-full " let:hidden let:toggle>
        <NavHamburger on:click={toggle} class1="w-full !md:flex md:w-auto md:order-1 "/>
        <NavBrand href="/">
            <img {src} alt={appTitle} class="e mr-3 h-6"/>
            <span class="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">Negosud</span>
        </NavBrand>
        <div class="flex items-center md:order-2">
            <a href="/cart" >
                <Button class=" !bg-transparent" >
                    <ShoppingCart/>{cart_sum}
                </Button>
            </a>
            {#if sessionValue === 'true' }
                <Button class="!bg-red-900 !list-none font-bold tracking-wider hover:bg-red-900 hover:text-[#CAB089F9" style="height: fit-content; top: 1em;">
                    <Chevron>                    <User/>
                    </Chevron>
                </Button>
                <Dropdown>
                    <DropdownItem><a href="/account" class="text-black"> Mon compte</a></DropdownItem>
                    <DropdownItem><a href="/cart" class="text-black">>Mon panier</a></DropdownItem>
                    <DropdownItem><a href="/account" class="text-black">>Commandes</a></DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem><Button href="" class="font-bold text-red-900 !bg-transparent" on:click={disconnectUser}>Deconnexion</Button></DropdownItem>
                </Dropdown>
            {:else}
                <a href="/login"><Button  class="!bg-red-900 text-white justify-end">
                    <User/>
                </Button></a>
            {/if}
        </div>
        <NavUl  {hidden} class="!text-white">
            <NavLi href="/"  class="flex !text-white"><HomeModern /> Accueil</NavLi>
            <NavLi href="/products"  class="flex !text-white"><Star /> Produits</NavLi>
               <NavLi class="flex !text-white"> <Chevron>
                    <ArrowRightCircle/>
                    Type de produits
               </Chevron></NavLi>
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
            <NavLi class="flex !text-white"><Chevron><Briefcase /> Pour les professionnels</Chevron></NavLi>
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
    </Navbar>
</div>

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
