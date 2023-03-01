<script>
    import ManageItems from "./ManageItems.svelte";
    import {cart, session} from "../../stores/stores.js";
    import {Button} from "flowbite-svelte";
    import {env} from "$env/dynamic/public";
    import {ArrowRight} from "svelte-heros-v2";
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
            totalPrice = item.count * item.customerPrice;
            orderTotal += totalPrice;
        });
    });

    let orderStatus ='';

    async function postOrder() {
        let token = `Bearer ` + localStorage.getItem("token");
        let url = env.PUBLIC_API_URL + "/api/customerorder/addcustomerorder"
        const res = await fetch(url, {
            credentials: 'include',
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "id": 50,
                    "reference": "toto",
                    "description": "toto",
                }
            )
        })
        if (res.ok) {
            orderStatus = "Votre commandé a bien été prise en compte !"
        } else {
            orderStatus = "La commande n'a pas pu être envoyée"
        }
    }
</script>

<h1>{orderStatus}</h1>
        {#if cartItems.length === 0}
            {#if checkedOut}
                <p class="empty-message">Merci de votre confiance !</p>
            {:else}
                <div class="w-full mr-auto ml-auto flex flex-col justify-center items-center">
                    <img src="/img/logo.png" alt="empty cart" class="w-32 pb-6"/>
                    <p class="empty-message pb-6">Votre panier est vide...</p>
                   <a href="/products" class="font-bold text-red-900 flex flex-row pb-12"> <ArrowRight/>  Explorer nos produits</a>
                    <div class="flex flex-row">
                        <img src="/img/rose.png" alt="empty cart" class="w-24 pr-2"/>
                        <img src="/img/vin_blanc.png" alt="empty cart" class="w-24 pr-2"/>
                        <img src="/img/spirit.webp" alt="empty cart" class="w-24 pr-2"/>
                        <img src="/img/pinard.png" alt="empty cart" class="w-24 pr-2"/>
                    </div>
                </div>
            {/if}
        {:else}
            <div class="w-full mr-auto ml-auto flex flex-col justify-center items-center">
                {#each cartItems as item (item.fullName)}
                    <div class="my-1">
                        <ManageItems {item}/>
                    </div>
                {/each}
            </div>
            <h2 class="font-extrabold text-3xl text-red-900 pt-8 text-center">Total : {orderTotal}€</h2>

            <a href="/checkout">
                <Button class="mt-6 w-full !bg-red-900 text-white hover:!bg-black">
                    Commander
                </Button>
            </a>
            <br>
        {/if}



