<script>
    import {Button} from "flowbite-svelte";

    let cart = [];
    let products = [
        {
            id: 1,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 10,
            quantity: 1
        },
        {
            id: 2,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 11,
            quantity: 1
        },
        {
            id: 3,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 12,
            quantity: 1
        },
        {
            id: 1,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 10,
            quantity: 1
        },
        {
            id: 2,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 11,
            quantity: 1
        },
        {
            id: 3,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 12,
            quantity: 1
        },
        {
            id: 4,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 10,
            quantity: 1
        },
        {
            id: 4,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 11,
            quantity: 1
        },
        {
            id: 5,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 12,
            quantity: 1
        },
        {
            id: 6,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 10,
            quantity: 1
        },
        {
            id: 7,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 11,
            quantity: 1
        },
        {
            id: 8,
            name: "Pinard",
            image: "src/lib/images/pinard.jpg",
            price: 12,
            quantity: 1
        },
    ]
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

    <div class="cart-list">
        {#each cart as item }
            {#if item.quantity > 0}
                <div class="cart-item">
                    <img width="50" src={item.image} alt={item.name}/>
                    <div>{item.quantity}
                        <button on:click={() => incrementItem(item)}>+</button>
                        <button on:click={() => removeFromCart(item)}>-</button>
                    </div>
                    <p>{item.price * item.quantity}€</p>
                </div>
            {/if}
        {/each}
        <div class="total">
            <h4>Total: {total}€ </h4>
        </div>
        <p>{cart.length} articles dans le panier</p>
    </div>
    <Button class="hover:!text-red-200 !text-white !bg-[#5C1427] !font-bold">Commander</Button>


<style>
    .total {
        text-align: right;
    }
    .cart-list {
        border: 2px solid;
        padding: 10px;
    }
</style>