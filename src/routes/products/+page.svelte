<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {Button, Card, TabItem, Tabs} from 'flowbite-svelte'
    import Error404 from "$lib/Errors/Error404.svelte";
    import ProductsList from "$lib/Products/ProductsList.svelte";
    import { MagnifyingGlass } from "svelte-heros-v2";
    import ProductCard from "$lib/Products/ProductCard.svelte";
    import NoMatch from "$lib/Errors/NoMatch.svelte";

    export let data;

    let products = data.bottles;
    export  let searchWord = '';
    let searchParam = 'fullName';

    function searchMultiParameters(products, searchWord) {
        if (searchWord || searchWord !== '') {
            return products.filter(product => {
                return product.fullName.toLowerCase().includes(searchWord.toLowerCase()) ||
                    product.yearProduced.toString().match(searchWord) ||
                    product.wineType.toLowerCase().includes(searchWord.toLowerCase());
            });
        } else {
            console.log(searchWord);
            return products
        }
    }

</script>

<div class=" rounded-md shadow-md p-12 ">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 bg-[#CAB089F9] ml-auto mr-auto "
          style="full">
        <TabItem class="w-full" open>
            <span slot="title">Nos produits</span>
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
                <h1>Résultats pour la recherche : {searchWord}</h1>
                {#if searchMultiParameters(products, searchWord).length < 1 }
                    <NoMatch  searchWord={searchWord}/>
                    <ProductsList products={products} {data}/>

                {/if}
                <div class="products ">
                    <div class="product-list shadow-sm bg-gray-200">
                    {#each searchMultiParameters(products, searchWord) as item}
                        <ProductCard item={item} {data}/>
                    {/each}
                        <div>
                            <ProductsList products={products} {data}/>
                        </div>
                    </div>
            </div>
            {:else}
                <ProductsList products={products} {data}/>
            {/if}
        </TabItem>

        <TabItem class="w-full">
            <span slot="title">Les producteurs</span>
            <section class="products">
                {#if data.producers}
                    <div class="product-list bg-red-900 shadow-sm ">
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
            <span slot="title">Les régions</span>
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


    .product-list {
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);

    }


    .content {
        padding-left: 5rem;
        padding-right: 5rem;
    }


</style>