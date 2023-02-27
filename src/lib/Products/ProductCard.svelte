<script>
    import {get} from "svelte/store";
    import {cart} from "../../stores/stores.js";
    import {Button, Card, Modal} from "flowbite-svelte";
    import {ArrowUturnRight, Document, ShoppingCart, ArchiveBox} from "svelte-heros-v2";

    let isOpenModal = false;
    export let item;
    let {fullName, customerPrice, yearProduced, wineType, picture} = item;
    const cartItems = get(cart);
    let inCart = cartItems[fullName] ? cartItems[fullName].count : 0;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }

    export function addToCart(unit) {
        inCart += unit;
        cart.update(n => {
            return {...n, [fullName]: {...item, count: inCart}};
        });
    }
</script>

<Card class="flex justify-center items-center text-center shadow-lg m-8 !bg-[#ededed] hover:!scale-110 w-96 max-h-full">
    <img alt="pinard" class="image max-h-56" src='{item.picture}'/>
    <Button class="!font-extrabold text-lg !bg-transparent text-red-900 hover:scale-110 uppercase !p-6 !text-center" isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>
        <h4>{item.fullName}</h4>
    </Button>
    <div class="pb-8">
        {#if wineType !== "Spirit"}
            <p>Vin {item.wineType.toLowerCase()}</p>
            <p>Millésime {item.yearProduced}</p>
        {:else}
            <p>Spiritueux</p>
            <p>Année {item.yearProduced}</p>
        {/if}
    </div>
    <div class="flex p-4 text-gray-700">
        <h2 class="font-extrabold text-5xl text-center">{item.customerPrice}€ </h2> <p class="!text-2xs"> TTC</p><br />
    </div>
    <div class="btn-group flex flex-col" role="group">
        <Button class="!bg-red-900 hover:!bg-white shadow-lg hover:!text-red-900 !text-white" on:click={() => addToCart(1)}>
            <ShoppingCart/>
            Acheter
        </Button>
        <Button class="!bg-red-900 hover:!bg-white shadow-lg hover:!text-red-900 !text-white !my-2" on:click={() => addToCart(6)}>
            <ArchiveBox/>
            Acheter un carton
        </Button>
        <Button class="relative shadow-lg right-0 !bg-white !border-red-900 !text-red-900 border-black hover:!bg-red-900 hover:!text-white"
                isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>
            <Document/>
            Détails
        </Button>
    </div>
</Card>
<Modal autoclose={false} bind:open={isOpenModal} class="w-full !bg-black/90 !font-extrabold rounded-lg border-2 border-white">
    <div class="p-4 text-white bg-red-900"><p class="!font-extrabold !px-32  text-center uppercase text-5xl">{item.fullName}</p></div>
    <div class="bg-white border border-2 rounded-lg">
    <div class="flex  justify-center items-center flex-rox py-6">
        <div class="col h-[550px]  min-w-[160px] !w-[800px] mx-12">
            <img alt="pinard" width="300px" class="image h-full" src='{item.picture}'/>
        </div>
        <div class="pr-12 text-black text-lg">
            <p class="py-8 text-justify italic"> {item.description} <br /></p>
            <p class="py-2">Producteur :  <a href="#" class="underline text-red-900 italic">{item.producer == null ? "Inconnu" : item.producer.name}</a> <br /></p>
            <p class="py-2">Catégorie :  {item.wineType} <br /></p>
            <p class="py-2">Volume :  {item.volume} cL <br /></p>
            <p class="py-2">Alcool :  {item.alcoholPercentage} ° <br /></p>
            <p class="py-2">Année :  {item.yearProduced}<br /></p>
        </div>
        </div>
    </div>
    <div class=" !w-full text-white p-4 pb-0 bg-red-900 flex justify-center  items-center">
        <h2 class="!font-extrabold text-5xl text-center">{item.customerPrice}€ </h2> <p class="!text-2xs"> TTC</p><br />
    </div>
    <div class="btn-group pb-10 px-10 flex align-center justify-center" role="group">
        <Button class="!bg-red-900 hover:!bg-black shadow-lg m-1 !text-white font-extrabold"
                on:click={addToCart}>
            <ShoppingCart/>
            Acheter
        </Button>
        <Button class="hover:!bg-red-900 !bg-white shadow-lg m-1 text-red-900 hover:!text-white" on:click={closeModal}>
            <ArrowUturnRight/> Fermer
        </Button>
    </div>
</Modal>
