<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */
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

<section class="products">
    <div class="product-list">
        {#each data.bottles as post}
            <div class="individualProduct">
                <img class="image" src="src/lib/images/pinard.jpg" alt="pinard"/>
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

    .total {
        text-align: right;
    }

    .cart-list {
        border: 2px solid;
        padding: 10px;
    }
</style>