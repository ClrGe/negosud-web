<script>
    import { get } from "svelte/store";
    import { cart } from "../../Stores/stores.js";
    import {Button} from "flowbite-svelte";
    export let item;
    let { name, price } = item;
    const cartItems = get(cart);
    let inCart = cartItems[name] ? cartItems[name].count : 0;
    function addToCart() {
        inCart++;
        cart.update(n => {
            return { ...n, [name]: { ...item, count: inCart } };
        });
    }
</script>



<div class="card">
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <b class=alert alert-info > {price} €</b>
        <p class=alert alert-info >{#if inCart > 0}
      <span>
        <em>({inCart} dans le panier)</em>
      </span>
        {/if}</p> </div>
    <div class="btn-group" role="group">
        <Button class="bg-red-900 text-white hover:!bg-red-200 hover:!text-red-900 hover:!border-red-900" on:click={addToCart}>
            Ajouter au panier
        </Button>
    </div>
</div>