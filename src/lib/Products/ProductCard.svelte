<script>
    import {get} from "svelte/store";
    import {cart} from "../../stores/stores.js";
    import {Button, Card, Modal} from "flowbite-svelte";
    import {ArrowUturnRight, Document, ShoppingCart} from "svelte-heros-v2";

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
<Modal autoclose={false} bind:open={isOpenModal} class="w-full bg-gray-100 !font-extrabold rounded-lg">
    <div class="text p-10">
        <div class="flex justify-center items-center">
            <img alt="pinard" class="image max-h-56 w-24" src="src/lib/img/pinard.png"/>
        </div>
        <div class="py-10 font-extrabold text-red-900">
            <h1>{item.fullName}</h1>
        </div>
        <div class="pb-10 text-justify">
            <p>Description :  {item.description} <br /></p>
        </div>
        <div class="py-2">
            <p>Producteur :  {item.producer} <br /></p>
        </div>
        <div class="py-2">
            <p>Type de vin :  {item.wineType} <br /></p>
        </div>
        <div class="py-2">
            <p>Volume :  {item.volume} cL <br /></p>
        </div>
        <div class="py-2">
            <p>Alcool :  {item.alcoholPercentage} ° <br /></p>
        </div>
        <div class="py-2 pb-10">
            <p>Année :  {item.yearProduced}<br /></p>
        </div>
        <div class=" !w-full text-black mb-6 !p-6 bg-gray-100 rounded-lg shadow-lg py-10 !font-extrabold text-lg text-center">
            <h2>{item.currentPrice} € TTC<br /></h2>
        </div>
    </div>
    <div class="btn-group pb-10 px-10" role="group">
        <Button class="!bg-red-900 hover:!bg-white shadow-lg hover:!text-red-900 !text-white"
                on:click={item}>
            <ShoppingCart/>
            Acheter
        </Button>
        <Button class="hover:!bg-red-900 !bg-white shadow-lg text-red-900 hover:!text-white" on:click={closeModal}>
            <ArrowUturnRight/> Fermer
        </Button>
    </div>
</Modal>