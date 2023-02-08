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


<div class="bg-white ml-auto mr-auto font-bold  p-10 text-justify rounded-lg flex justify-center flex-col">
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
                <Button class="bg-red-900 text-white hover:!bg-red-200 hover:!text-red-900 hover:!border-red-900"><a href="/payment">Commander</a></Button>
            {/if}
        </div>
    </div>
</div>
