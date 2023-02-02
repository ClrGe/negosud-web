<script>
    /** @type {import('../../../../../.svelte-kit/types/src/routes').PageData} */
    export let data;

    let cart = [];

    const addProductToCart = (product) => {
        for (let item of cart) {
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

    $: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

</script>

<div id="background"></div>
<div id="modal">
    <p>This is a modal window.</p>
</div>


<div class="select">
    <select class="slct">
        <option value="GFG">Tous les produits</option>
        <option value="DBMS">Nouveautés</option>
        <option value="OS">Vins rouges</option>
        <option value="OS">Vins blancs</option>
        <option value="OS">Vins pétillants</option>
        <option value="OS">Spiritueux</option>
        <option value="OS">Par région</option>
        <option value="OS">Les producteurs</option>
    </select>
</div>

<section class="products">
    <div class="product-list">
        {#each data.bottles as post}
            <div class="individualProduct">
                <img class="image" src="../../../lib/images/pinard.jpg" alt="pinard"/>
                <h4>{post.fullName}</h4>
                <p>{post.wineType}</p>
                <p>{post.yearProduced}</p>
                <p><b>{post.currentPrice}€</b></p>
                <button>Acheter</button>
                <button>Détails</button>
            </div>
        {/each}
    </div>
</section>

<style>
    #background {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #modal {
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 20px #333);
    }

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

    select {
        ppearance: none;
        background-color: transparent;
        padding: 0 1em 0 0;
        margin: 0;
        width: 50%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
        z-index: 1;
        outline: none;}

    .select {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        min-width: 15ch;
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

    .slct:after{
        content: '';
        display: inline-block;
        float: right;
        width: .5rem;
        height: .5rem;
        border-bottom: 1px solid currentColor;
        border-left: 1px solid currentColor;
        border-bottom-left-radius: 2px;
        transform: rotate(45deg) translate(50%, 0%);
        transform-origin: center center;
        transition: transform ease-in-out 100ms
        }
</style>