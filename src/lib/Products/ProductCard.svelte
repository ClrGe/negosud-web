<script>
    import {get} from "svelte/store";
    import {cart} from "../../stores/stores.js";
    import {Button, Card} from "flowbite-svelte";
    import {Document, ShoppingCart} from "svelte-heros-v2";

    let isOpenModal = false;
    export let item;
    let {fullName, currentPrice, yearProduced, wineType} = item;
    const cartItems = get(cart);
    let inCart = cartItems[fullName] ? cartItems[fullName].count : 0;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }

    export function addToCart() {
        inCart++;
        cart.update(n => {
            return {...n, [fullName]: {...item, count: inCart}};
        });
    }
</script>


<Card class="flex justify-center items-center shadow-lg m-8 !bg-[#ededed] hover:!scale-110 ">
    <img alt="pinard" class="image max-h-56 w-24" src="src/lib/img/pinard.png"/>
    <h4 class="font-extrabold uppercase p-6 ">{fullName}</h4>
    <div class="pb-8">
        <p>{wineType}</p>
        <p>{yearProduced}</p>
    </div>
    <div class=" !w-full text-black mb-6 !p-6 bg-gray-100 rounded-lg shadow-lg " id="price">
        <h2>{currentPrice}€</h2>
    </div>
    <div class="btn-group" role="group">
        <Button class="!bg-red-900 hover:!bg-white shadow-lg hover:!text-red-900 !text-white" on:click={addToCart}>
            <ShoppingCart/>
            Acheter
        </Button>
        <Button class="relative shadow-lg right-0 !bg-white !border-red-900 !text-red-900 border-black hover:!bg-red-900 hover:!text-white"
                isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>
            <Document/>
            Détails
        </Button>
    </div>
</Card>