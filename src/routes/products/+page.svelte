<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {Button, Card, Chevron, Dropdown, DropdownItem, TabItem, Tabs} from 'flowbite-svelte'
    import ProductCard from "../../lib/Products/ProductCard.svelte";
    import ProductDetails from "../../lib/Products/ProductDetails.svelte";
    import Error404 from "../../lib/Errors/Error404.svelte";


    let isOpenModal = false;

    function closeModal() {
        isOpenModal = false;
    }

    export let data;
    let products = data.bottles;
    let selected;
    let wineType = '';

    let options = [
        {value: '', label: 'Tous les produits'},
        {value: 'Red', label: 'Vins rouges'},
        {value: 'White', label: 'Vins blancs'},
        {value: 'Sparkling', label: 'Pétillants'},
        {value: 'Spirits', label: 'Spiritueux'}
    ];

    function filterByType(products, wineType)  {
        if(wineType){
            return products.filter(product => {
                let filtered = product.wineType.toLowerCase().includes(wineType.toLowerCase());
                console.log(filtered);

                return product.wineType.toLowerCase().includes(wineType.toLowerCase());
            });
        } else {
            return products
        }
    }

</script>

<div class="content rounded-md shadow-md p-12 ">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 bg-[#CAB089F9] w-1/2 ml-auto mr-auto "
          style="full">

        <TabItem class="w-full" open>
            <select bind:value={selected} on:change="{() => wineType === selected.value}"   placement="right-start">
                {#each options as option}
                 <option value={option}>
                        {option.label}
                    </option>
                {/each}
            </select>
            <span slot="title">{selected ? selected.label : 'Les vins'}</span>
            {#if data.bottles }
                <section class="products !bg-[#ededed]">
                    <div class="product-list shadow-sm ">
                        {#if selected && selected.value === ''}
                            {#each filterByType(products, selected.value) as item}
                                <ProductCard {item}/>
                                <div id="bg" style="--display: {isOpenModal ? 'block' : 'none'}"
                                     on:click={closeModal}></div>
                                <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                    <ProductDetails {item}/>
                                </div>
                            {/each}
                        {:else if selected && selected.value === 'Red'}
                            {#each filterByType(products, selected.value) as item}
                                <ProductCard {item}/>
                                <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                     on:click={closeModal}></div>
                                <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                    <ProductDetails {item}/>
                                </div>
                            {/each}
                            {:else if selected && selected.value === 'White'}
                            {#each filterByType(products, selected.value) as item}
                                <ProductCard {item}/>
                                <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                     on:click={closeModal}></div>
                                <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                    <ProductDetails {item}/>
                                </div>
                            {/each}
                            {:else if selected && selected.value === 'Sparkling'}
                            {#each filterByType(products, selected.value) as item}
                                <ProductCard {item}/>
                                <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                     on:click={closeModal}></div>
                                <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                    <ProductDetails {item}/>
                                </div>
                            {/each}
                            {:else if selected && selected.value === 'Spirits'}
                            {#each filterByType(products, selected.value) as item}
                                <ProductCard {item}/>
                                <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                     on:click={closeModal}></div>
                                <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                    <ProductDetails {item}/>
                                </div>
                            {/each}
                        {:else}
                            {#each products as item}
                                <ProductCard {item}/>
                                <div id="background" style="--display: {isOpenModal ? 'block' : 'none'}"
                                     on:click={closeModal}></div>
                                <div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
                                    <ProductDetails {item}/>
                                </div>
                            {/each}
                        {/if}
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
        box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.5);
        box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);

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