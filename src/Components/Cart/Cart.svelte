<script>

    import ManageItems from "./ManageItems.svelte";
    import {cart} from "../../Stores/stores.js";

    let checkedOut = false;
    let cartItems = [];

    let cart_sum = 0;
    let totalPrice = 0;
    let orderTotal = 0;

    const unsubscribe = cart.subscribe(items => {
        cartItems = Object.values(items);
        const itemValues = Object.values(items);
        orderTotal = 0;
        totalPrice = 0;
        cart_sum = 0;
        itemValues.forEach(item => {
            cart_sum += item.count;
            totalPrice = item.count * item.currentPrice;
            orderTotal += totalPrice;
        });
    });


</script>


<h1>Panier</h1>
<div class="row">
    <div class="col-sm">
        {#if cartItems.length === 0}
            {#if checkedOut}
                <p class="empty-message">Merci de votre confiance !</p>
            {:else}
                <p class="empty-message">Votre panier est vide...</p>
                <a href="/products" class="font-bold text-red-900">Explorer nos produits</a>
            {/if}
        {:else}
            <div class="row">
                {#each cartItems as item (item.fullName)}
                    <ManageItems {item}/>
                {/each}
                <h2 class="font-extrabold text-3xl text-red-900 pt-8 text-center">Total : {orderTotal}€</h2>

            </div>
            <br>
        {/if}
    </div>
</div>

