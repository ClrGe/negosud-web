<script>
    import {get} from "svelte/store";
    import {cart} from "../../stores/stores.js";
    import {Button, Card, Modal} from "flowbite-svelte";
    import {ArrowUturnRight, Document, ShoppingCart, ArchiveBox, Star, Link} from "svelte-heros-v2";

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

    //function to substract a percentage of a number
    function substractPercentage(number, percentage) {
        return number - (number * percentage / 100);
    }
</script>

<Card class="flex justify-center items-center text-center shadow-lg m-8 !bg-[#ededed] hover:!scale-110 w-96 max-h-full" isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>

    <div class="rounded-lg flex flex-col px-12 py-2 items-center justify-center bg-white">

    <img alt="pinard" class="image max-h-56" src='{item.picture}' isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}/>
    <Button class="!font-extrabold text-lg !bg-transparent text-red-900 hover:scale-110 uppercase !p-6 !text-center" isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>
       <h4>{item.fullName}</h4>
    </Button>
    <div class="pb-4">
        {#if wineType != "Spirit"}
            <p>Vin {item.wineType.toLowerCase()} - Millésime {item.yearProduced}</p>
        {:else}
            <p>Spiritueux - Année {item.yearProduced}</p>
        {/if}
        <p>{item.volume} cL - {item.alcoholPercentage}°</p>

    </div>
    </div>

    <!--    <Button class=" mb-12 shadow-lg  !bg-white !border-red-900 !text-red-900 border-black"-->
<!--            isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>-->
<!--        <Document/>-->
<!--        Détails-->
<!--    </Button>-->
    <div class="flex text-gray-700 mt-6">
        <h2 class="font-extrabold text-5xl text-center">{item.customerPrice}€ </h2> <p class="!text-2xs"> TTC</p><br />
    </div>

    <div class="btn-group flex flex-col" role="group">
        <Button class=" !text-white shadow-lg !bg-red-900" on:click={() => addToCart(1)}>
            <ShoppingCart/>
            Acheter
        </Button>
        <h2 class="text-center text-red-900 pt-4 font-sans font-extrabold">Lot de 6 pour {(substractPercentage(item.customerPrice, 5) *6)} € (<span class="text-lg">-5%</span>)</h2>
        <Button class="!my-2 !text-red-900 !font-extrabold !bg-white shadow-lg " on:click={() => addToCart(6)}>
            <Star/>
            En profiter
        </Button>
    </div>
</Card>
<Modal autoclose={false} bind:open={isOpenModal} class="w-full !bg-gray-200 !font-extrabold rounded-lg border-2 border-white">
    <div class="p-4 text-red-900"><p class="!font-extrabold !px-32  text-center uppercase text-5xl">{item.fullName}</p></div>
    <div class="bg-white border border-2 rounded-lg">
    <div class="flex  justify-center items-center flex-rox py-6">
        <div class="col max-h-full  min-w-[160px] !w-[800px] mx-12">
            <img alt="pinard" width="300px" class="image h-full" src='{item.picture}'/>
        </div>
        <div class="pr-12 text-black text-lg">
            <p class="py-8 text-justify italic"> {item.description} <br /></p>
            <p class="py-2">Producteur :  <a href="#" class="underline text-red-900 italic">{item.producer == null ? "Vigneron" : item.producer.name}</a> <br /></p>
            <p class="py-2">Vin {item.wineType} - Label {item.wineLabel == null ? "Bio" : item.wineLabel.label} - {item.yearProduced}<br /></p>
            <p class="py-2">{item.region == null ? "Gascogne" : item.region.name} ;  {item.country == null ? "France" : item.country.name} <br /></p>
            <p class="py-2">{item.volume} cL -  {item.alcoholPercentage} ° </p>
        </div>
        </div>
    </div>
    <div class=" !w-full text-red-900 p-4 pb-0 flex justify-center  items-center">
        <h2 class="!font-extrabold text-5xl text-center">{item.customerPrice}€ </h2> <p class="!text-2xs"> TTC</p><br />
        <p class="!text-2xs"> / bouteille</p>
    </div>
    <div class="btn-group flex flex-col" role="group">
        <Button class=" !text-white shadow-lg !bg-red-900" on:click={() => addToCart(1)}>
            <ShoppingCart/>
            Acheter
        </Button>
        <h2 class="text-center text-red-900 pt-4 font-sans font-extrabold">Lot de 6 pour {(substractPercentage(item.customerPrice, 5) *6)} € (<span class="text-lg">-5%</span>)</h2>
        <Button class="!my-2 !text-red-900 !font-extrabold !bg-white shadow-lg " on:click={() => addToCart(6)}>
            <Star/>
            En profiter
        </Button>
    </div>
</Modal>