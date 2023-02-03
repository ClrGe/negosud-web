<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {CircleStack, Document, HomeModern, Minus, Plus, ShoppingCart, User} from "svelte-heros-v2";
    import {Button, Dropdown, DropdownItem, Chevron, Checkbox, Search, Tabs, TabItem, List} from 'flowbite-svelte'
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
        cart = [...cart, product]
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

<Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem class="w-full" open>
        <div class="select">
            <Button  style="background :#670302"><Chevron>Afficher ...</Chevron></Button>
            <Dropdown >
                <DropdownItem>Tous les produits</DropdownItem>
                <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Type de produit</Chevron></DropdownItem>
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
        <div class="cart-list">

            {#each cart as item }
                {#if item.quantity > 0}

                <div class="cart-item">
                    <p>{item.fullName}</p>
                    <p>{item.currentPrice * item.quantity}€</p>
                    <div>{item.quantity}

                                <Button on:click={() => incrementItem(item)}><Plus /></Button>
                                <Button on:click={() => removeFromCart(item)}><Minus /></Button>
                            </div>

                    </div>
                {/if}

            {/each}
            <div class="total">
                <h4>Total: {total}€ </h4>
            </div>
        </div>
        <p>{cart.length} articles dans le panier</p>
        <section class="products">
            <div class="product-list">
                {#each data.bottles as product}
                    <div class="individualProduct">
                        <img class="image" src="src/lib/images/pinard.png" alt="pinard"/>
                        <h4>{product.fullName}</h4>
                        <p>{product.wineType}</p>
                        <p>{product.yearProduced}</p>
                        <p><b>{product.currentPrice}€</b></p>
                        <Button class="relative right-0 btn" on:click={() => addProductToCart(product)} style="background :#5C1427">
                            <ShoppingCart /> Acheter
                        </Button>
                        <Button  class="relative right-0 btn" style="background :#5C1427" on:click={openModal} isOpenModal={isOpenModal} on:closeModal={closeModal}>
                            <Document />Détails
                        </Button>
                    </div>
                    <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}" on:click={closeModal}></div>
                    <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                        <div class="content">
                            <h2>Détails du produit</h2>
                            <p>Appelation : {product.fullName}</p>
                            <p>Description :  {product.description}</p>
                            <p>Type de vin :  {product.wineType}</p>
                            <p>Cépage :</p>
                            <p>Volume :  {product.volume}</p>
                            <p>Année :  {product.yearProduced}</p>
                            <p>Prix :  {product.currentPrice}</p>
                            <button>Acheter</button>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Les producteurs</span>
        <section class="products">
            <div class="producer-list">
                {#each data.producers as producer}
                    <div class="individualProducer">
                        <img src="src/lib/images/wineyard.jpeg" alt="pinard"/>
                        <h4>{producer.name}</h4>
                        <p>{producer.details}</p>
                        <Button class="relative right-0 btn" style="background :#5C1427">
                             Produits
                        </Button>
                    </div>
                {/each}
            </div>
        </section>    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Les cépages</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><b>Paramètres:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
</Tabs>


<style>
    .products {
        display: flex;
        flex-wrap: inherit;
        justify-content: space-around;
        align-content: space-around;
    }

    .individualProduct{
        width: 300px;
        margin-bottom: 5em;
    }
    .individualProducer{
        margin-bottom: 5em;
        margin: 2em;
    }
    .producer-list{
        padding: 2%;
        display: flex;
        justify-content: space-around;
    }
    .product-list{
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .image {
        padding-left: 1em;
        width: 150px;
    }

    .select {
        display: flex;
        justify-content: center;
        position: relative;
        min-width: 25ch;
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        font-size: 1.25rem;
        cursor: pointer;
        line-height: 1.1;
    }

    /* Hide arrow icon in IE browsers */
    .select::-ms-expand {
        display: none;
     }

    .select:hover::after{
        border-color: #888;
    }

    .select:focus {
        border-color: #800080;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        color: #222;
        outline: none;
    }


    h2 {
        text-align: center;
        font-weight: bold;
        font-size: large;
        padding: 3rem;
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
        width: 25%;
        height: 50%;
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
</style>