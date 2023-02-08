<script>

    import CheckoutItem from "../../Components/Cart/CheckoutItem.svelte";
    import {cart} from "../../Stores/stores.js";
    import {Button} from "flowbite-svelte";

    let checkedOut = false;
    let cartItems = [];
    const unsubscribe = cart.subscribe(items => {
        cartItems = Object.values(items);
    });
    const checkout = () => {
        checkedOut = true;
        cart.update(n => {
            return {};
        });
    };
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
                    {#each cartItems as item (item.name)}
                        <CheckoutItem {item} />
                    {/each}
                </div>
                <br>
            {/if}
        </div>
    </div>

