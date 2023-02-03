<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {Document, ShoppingCart} from "svelte-heros-v2";
    import {Button, Card, Chevron, Dropdown, DropdownItem, TabItem, Tabs} from 'flowbite-svelte'

    let isOpenModal = false;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }

    export let data;

    let cart = [];

    const addProductToCart = (product) => {
        for (let item of cart) {
            item.quantity = 1;
            if (item.id === product.id) {
                product.quantity += 1
                cart = cart;
                return;
            }
        }
        cart = [...cart, product];
    }

    const removeFromCart = (product) => {
        for (let item of cart) {
            if (item.id === product.id) {
                if (product.quantity > 1) {
                    product.quantity -= 1
                    cart = cart
                } else {
                    cart = cart.filter((cartItem) => cartItem != product)
                }
                return;
            }
        }
    }

    const incrementItem = (product) => {
        for (let item of cart) {
            if (item.id === product.id) {
                item.quantity += 1
                cart = cart;
                return;
            }
        }
    }
    $: total = cart.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0)

</script>


<div class="content rounded-md shadow-md p-12 ">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 bg-[#CAB089F9]"
          style="full">
        <TabItem class="w-full" open>
            <div class="w-full flex justify-center mb-10 h-12">
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
            <!--        <div class="cart-list">-->

            <!--            {#each cart as item }-->
            <!--                {#if item.quantity > 0}-->

            <!--                    <div class="cart-item">-->
            <!--                        <p>{item.fullName}</p>-->
            <!--                        <p>{item.currentPrice * item.quantity}€</p>-->
            <!--                        <div>{item.quantity}-->

            <!--                            <Button on:click={() => incrementItem(item)}>-->
            <!--                                <Plus/>-->
            <!--                            </Button>-->
            <!--                            <Button on:click={() => removeFromCart(item)}>-->
            <!--                                <Minus/>-->
            <!--                            </Button>-->
            <!--                        </div>-->

            <!--                    </div>-->
            <!--                {/if}-->

            <!--            {/each}-->
            <!--            <div class="total">-->
            <!--                <h4>Total: {total}€ </h4>-->
            <!--            </div>-->
            <!--        </div>-->
            <!--        <p>{cart.length} articles dans le panier</p>-->
            <section class="products">
                <div class="product-list shadow-sm ">
                    {#each data.bottles as product}
                        <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg ">

                            <img class="image" src="src/lib/images/pinard.png" alt="pinard"/>
                            <h4 class="font-extrabold uppercase p-6 ">{product.fullName}</h4>
                            <div class="pb-8">
                                <div class="pb-8">
                                    <p>{product.wineType}</p>
                                    <p>{product.yearProduced}</p>
                                </div>

                                <div id="price" class="mb-5 text-black p-6 bg-gray-100 rounded-lg shadow-lg ">
                                    <h2>{product.currentPrice}€</h2></div>
                                <Button class="btn bg-red-900 hover:bg-[#CAB089F9] shadow-lg hover:text-red-900 text-[#CAB089F9]"
                                        on:click={() => addProductToCart(product)}>
                                    <ShoppingCart/>
                                    Acheter
                                </Button>
                                <Button class="btn relative shadow-lg right-0 bg-[#CAB089F9] text-red-900 border-black hover:bg-red-900 hover:text-[#CAB089F9]"
                                        on:click={openModal}
                                        isOpenModal={isOpenModal} on:closeModal={closeModal}>
                                    <Document/>
                                    Détails
                                </Button>
                            </div>

                        </Card>
                        <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                             on:click={closeModal}></div>
                        <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                            <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg ">
                                <h2>Détails du produit</h2>
                                <div class="text">
                                    <p>Appelation : {product.fullName}</p>
                                    <p>Description :  {product.description}</p>
                                    <p>Type de vin :  {product.wineType}</p>
                                    <p>Cépage :</p>
                                    <p>Volume :  {product.volume}</p>
                                    <p>Année :  {product.yearProduced}</p>
                                    <p>Prix :  {product.currentPrice}</p>
                                </div>
                                <Button class="relative right-0 btn" on:click={() => addProductToCart(product)}
                                        style="background :#5C1427">
                                    <ShoppingCart/>
                                    Acheter
                                </Button>
                            </Card>
                        </div>
                    {/each}
                </div>
            </section>
        </TabItem>

        <TabItem class="w-full">
            <span slot="title">Les producteurs</span>
            <section class="content">

                <div class="product-list w-full">
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
        background: rgba(202, 176, 137, 0.98);
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