<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {ShoppingCart} from "svelte-heros-v2";
    import {Button, Card, Chevron, Dropdown, DropdownItem, TabItem, Tabs} from 'flowbite-svelte'
    import {get} from "svelte/store";
    import {cart} from "../../Stores/stores.js";
    import ProductCard from "../../Components/Products/ProductCard.svelte";

    let isOpenModal = false;
    function closeModal() {
        isOpenModal = false;
    }

    export let data;
    export let item;

    const cartItems = get(cart);
    let inCart = cartItems[data.bottles.fullName] ? cartItems[data.bottles.fullName].count : 0;

    function addToCart() {
        inCart++;
        cart.update(n => {
            return {...n, [data.bottles.fullName]: {...item, count: inCart}};
        });
    }
</script>

<div class="content rounded-md shadow-md p-12 ">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 bg-[#CAB089F9] w-1/2 ml-auto mr-auto "
          style="full">
        <TabItem class="w-full" open>
            <div class="w-full flex justify-center mb-10 h-12 ">
                <Button style="background :#670302">
                    <Chevron>Afficher ...</Chevron>
                </Button>
                <Dropdown>
                    <DropdownItem>Tous les produits</DropdownItem>
                    <DropdownItem class="flex items-center justify-between">
                        <Chevron placement="right">Type de produit</Chevron>
                    </DropdownItem>
                    <Dropdown placement="right-start">
                        <DropdownItem>Vins rouges</DropdownItem>
                        <DropdownItem>Vins blancs</DropdownItem>
                        <DropdownItem>Pétillants</DropdownItem>
                        <DropdownItem>Spiritueux</DropdownItem>
                    </Dropdown>
                    <DropdownItem>Nouveautés</DropdownItem>
                </Dropdown>
            </div>
            <span slot="title">Les vins</span>

            {#if data.bottles}

                <section class="products !bg-[#ededed]">
                    <div class="product-list shadow-sm ">

                        {#each data.bottles as item}

                            <ProductCard {item}/>
                            <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                 on:click={closeModal}></div>
                            <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg hover:!scale-110 ">
                                    <h2>Détails du produit</h2>
                                    <div class="text">
                                        <p>Appelation : {item.fullName}</p>
                                        <p>Description :  {item.description}</p>
                                        <p>Type de vin :  {item.wineType}</p>
                                        <p>Cépage :</p>
                                        <p>Volume :  {item.volume}</p>
                                        <p>Année :  {item.yearProduced}</p>
                                        <p>Prix :  {item.currentPrice}</p>
                                    </div>
                                    <Button class="relative right-0 btn" on:click={() => addToCart()}
                                            style="background :#5C1427">
                                        <ShoppingCart/>
                                        Acheter
                                    </Button>
                                </Card>
                            </div>

                        {/each}
                    </div>
                </section>
            {:else}
                <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                        <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                        <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
                            OOOPS</p>
                        <p class="text-gray-500 mt-8 py-2 border-y-2 text-center">Nos services sont temporairement
                            indisponibles</p>
                    </div>
                </div>
            {/if}
        </TabItem>

        <TabItem class="w-full">
            <span slot="title">Les producteurs</span>
            <section class="products">

                {#if data.producers}
                    <div class="product-list shadow-sm ">
                        {#each data.producers as producer}
                            <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg"
                                  style="width: fit-content;">
                                <img src="src/lib/images/wineyard.jpeg" alt="pinard"/>
                                <h4 class="font-extrabold uppercase p-6">{producer.name}</h4>
                                <div class="pb-8">
                                    <p>{producer.details}</p>
                                </div>
                                <Button class="relative right-0 btn" style="background :#5C1427">
                                    Produits
                                </Button>
                            </Card>
                        {/each}
                    </div>
                {:else}
                    <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                        <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                            <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                            <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
                                OOOPS</p>
                            <p class="text-gray-500 mt-8 py-2 border-y-2 text-center">Nos services sont temporairement
                                indisponibles</p>
                        </div>
                    </div>
                {/if}
            </section>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Les cépages</span>
            <section class="content">

                <p class="text-sm text-gray-500 dark:text-gray-400"><b>Paramètres:</b> Lorem ipsum dolor sit amet,
                    consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
        </TabItem>
    </Tabs>
</div>
<style>
    .content {
        margin: 0 auto;
        max-width: 130rem;
        min-width: 75vw;
        border-radius: 1em;
    }


    .producer-list {
        padding: 2%;
        display: flex;
        justify-content: space-around;
    }

    .product-list {
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: rgb(36 2 1 / 64%);
        box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);

    }

    .image {
        padding-left: 1em;
        width: 150px;
    }


    h2 {
        text-align: center;
        font-weight: bold;
        font-size: large;
        text-transform: uppercase;
    }

    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #details {
        display: var(--display);
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 1px rgba(138, 138, 138, 0.53));

    }

    .content {
        padding-left: 5rem;
        padding-right: 5rem;
    }

    .content button, .buyBtn, .detailsBtn:hover {
        padding: 1em;
        color: white;
        background: #670302;
        border: none;
        font-weight: bold;
        margin-bottom: 5rem;
    }

    .content button:hover, .detailsBtn, .buyBtn:hover {
        padding: 1em;
        background: #bd9494;
        color: #670302;
        border: none;
        font-weight: bold;
    }

    .cart-list {
        border: 2px solid;
        padding: 10px;
    }

    .cart-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
    }

    #price:hover, .btn:hover, h2 {
        transform: scale(1.1);
    }
</style>