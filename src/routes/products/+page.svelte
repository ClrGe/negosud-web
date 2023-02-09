<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {Button, Card, TabItem, Tabs} from 'flowbite-svelte'
    import ProductCard from "../../Components/Products/ProductCard.svelte";
    import ProductDetails from "../../Components/Products/ProductDetails.svelte";
    import Error404 from "../../Components/Errors/Error404.svelte";
    import SelectProducts from "../../Components/Products/SelectProducts.svelte";

    let isOpenModal = false;

    function closeModal() {
        isOpenModal = false;
    }

    export let data;
</script>

<div class="content rounded-md shadow-md p-12 ">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 bg-[#CAB089F9] w-1/2 ml-auto mr-auto "
          style="full">

        <TabItem class="w-full" open>
            <SelectProducts/>
            <span slot="title">Les vins</span>
            {#if data.bottles}
                <section class="products !bg-[#ededed]">
                    <div class="product-list shadow-sm ">
                        {#each data.bottles as item}
                            <ProductCard {item}/>
                            <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                 on:click={closeModal}></div>
                            <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                <ProductDetails {item}/>
                            </div>
                        {/each}
                    </div>
                </section>
            {:else}
                <Error404/>
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
                                <img src="src/lib/images/wineyard.jpeg" alt="pinard"/>
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
        box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);

    }

    h2 {
        text-align: center;
        font-weight: bold;
        font-size: large;
        text-transform: uppercase;
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

    .content button {
        padding: 1em;
        color: white;
        background: #670302;
        border: none;
        font-weight: bold;
        margin-bottom: 5rem;
    }

    .content button:hover {
        padding: 1em;
        background: #bd9494;
        color: #670302;
        border: none;
        font-weight: bold;
    }

</style>