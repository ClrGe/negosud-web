<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {Button, Card, CloseButton, Modal, TabItem, Tabs} from 'flowbite-svelte'
    import Error404 from "$lib/Errors/Error404.svelte";
    import addToCart from "$lib/Products/ProductsList.svelte";
    import ProductsList from "$lib/Products/ProductsList.svelte";
    import {ArrowUturnRight, Document, MagnifyingGlass, ShoppingCart, ViewfinderCircle} from "svelte-heros-v2";

    export let data;

    let products = data.bottles;
    let searchWord = '';
    let searchParam = 'fullName';
    let isOpenModal = false;

    function searchMultiParameters(products, searchWord) {
        if (searchWord || searchWord !== '') {
            return products.filter(product => {
                return product.fullName.toLowerCase().includes(searchWord.toLowerCase()) ||
                    product.yearProduced.toString().toLowerCase().includes(searchWord.toLowerCase()) ||
                    product.wineType.toLowerCase().includes(searchWord.toLowerCase());
            });
        } else {
            console.log(searchWord);
            return products
        }
    }

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }
</script>

<div class="content rounded-md shadow-md p-12 ">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 bg-[#CAB089F9] w-1/2 ml-auto mr-auto "
          style="full">
        <TabItem class="w-full" open>
            <span slot="title">Les vins</span>
            <form on:submit={searchMultiParameters(products, searchWord)} class="flex justify-center">
                <input type="text"
                       class="w-3/4 mt-4 h-12 rounded-r-none rounded-l shadow-sm focus:ring-red-900 focus:border-red-900 border-gray-300"
                       placeholder='Rechercher un produit ' bind:value={searchWord}/>
                <Button class="!w-1/2 h-12 !bg-red-900 hover:!bg-black border-red-900 focus:ring-red-900 focus:border-red-900 rounded-r rounded-l-none"
                        style="width: fit-content; margin-top: 1rem; margin-bottom: 1rem;"
                        on:click={() => products = searchMultiParameters(products, searchParam, searchWord)}>
                    <MagnifyingGlass/>
                    Rechercher
                </Button>
            </form>
            {#if searchWord}
                <h1>Recherche : {searchWord}</h1>
                <div class="flex justify-center !w-full">
                    {#each searchMultiParameters(products, searchWord) as product}
                        <Card class="flex justify-center items-center shadow-lg m-8 !bg-[#ededed] hover:!scale-110 ">
                            <img alt="pinard" class="image max-h-56 w-24" src="src/lib/img/pinard.png"/>
                            <h4 class="font-extrabold uppercase p-6 ">{product.fullName}</h4>
                            <div class="pb-8">
                                <p>{product.wineType}</p>
                                <p>{product.yearProduced}</p>
                            </div>
                            <div class=" !w-full text-black mb-6 !p-6 bg-gray-100 rounded-lg shadow-lg " id="price">
                                <h2>{product.currentPrice}€</h2>
                            </div>
                            <div class="btn-group" role="group">
                                <Button class="!bg-red-900 hover:!bg-white shadow-lg hover:!text-red-900 !text-white"
                                        on:click={addToCart}>
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
                                        <h1>{product.fullName}</h1>
                                    </div>
                                    <div class="pb-10 text-justify">
                                        <p>Description :  {product.description} <br /></p>
                                    </div>
                                    <div class="py-2">
                                        <p>Producteur :  {product.producer} <br /></p>
                                    </div>
                                    <div class="py-2">
                                        <p>Type de vin :  {product.wineType} <br /></p>
                                    </div>
                                    <div class="py-2">
                                        <p>Volume :  {product.volume} cL <br /></p>
                                    </div>
                                    <div class="py-2">
                                        <p>Alcool :  {product.alcoholPercentage} ° <br /></p>
                                    </div>
                                    <div class="py-2 pb-10">
                                        <p>Année :  {product.yearProduced}<br /></p>
                                    </div>
                                    <div class=" !w-full text-black mb-6 !p-6 bg-gray-100 rounded-lg shadow-lg py-10 !font-extrabold text-lg text-center">
                                        <h2>{product.currentPrice} € TTC<br /></h2>
                                    </div>
                                </div>
                            <div class="btn-group pb-10 px-10" role="group">
                                <Button class="!bg-red-900 hover:!bg-white shadow-lg hover:!text-red-900 !text-white"
                                        on:click={addToCart}>
                                    <ShoppingCart/>
                                    Acheter
                                </Button>
                                <Button class="hover:!bg-red-900 !bg-white shadow-lg text-red-900 hover:!text-white" on:click={closeModal}>
                                        <ArrowUturnRight/> Fermer
                                </Button>
                            </div>
                        </Modal>
                    {/each}
                </div>
            {:else}
                <ProductsList products={products} {data}/>
            {/if}
        </TabItem>

        <TabItem class="w-full">
            <span slot="title">Les producteurs</span>
            <section class="products">
                {#if data.producers}
                    <div class="product-list shadow-sm ">
                        {#each data.producers as producer}
                            <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg"
                                  style="width: fit-content;">
                                <img src="src/lib/img/wineyard.jpeg" alt="pinard"/>
                                <h4 class="font-extrabold uppercase p-6">{producer.name}</h4>
                                <div class="pb-8">
                                    <p>{producer.details}</p>
                                </div>
                                <Button class="relative right-0 btn" style="background :#5C1427">
                                    Produits
                                </Button>
                            </Card>
                        {/each}
                    </div>
                {:else}
                    <Error404/>
                {/if}
            </section>
        </TabItem>

        <TabItem class="w-full">
            <span slot="title">Les cépages</span>
            <section class="content">
                <p class="text-sm text-gray-500 dark:text-gray-400"><b>Paramètres:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </section>
        </TabItem>
    </Tabs>
</div>


<style>
    .content {
        margin: 0 auto;
        max-width: 130rem;
        min-width: 75vw;
        border-radius: 1em;
    }

    .product-list {
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: rgb(36 2 1 / 64%);
        box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);

    }


    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #details {
        display: var(--display);
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 1px rgba(138, 138, 138, 0.53));

    }

    .content {
        padding-left: 5rem;
        padding-right: 5rem;
    }


</style>