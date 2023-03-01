<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import {Button, Card, TabItem, Tabs} from 'flowbite-svelte'
    import Error404 from "$lib/Errors/Error404.svelte";
    import ProductsList from "$lib/Products/ProductsList.svelte";
    import {MagnifyingGlass} from "svelte-heros-v2";
    import ProductCard from "$lib/Products/ProductCard.svelte";
    import NoMatch from "$lib/Errors/NoMatch.svelte";
    import {env} from "$env/dynamic/public";

    export let data;
    export let searchWord = '';

    let selectedProducer = null;

    let products = data.bottles;
    let searchParam = 'fullName';
    let producerResearch;
    async function selectProducer(producer) {
        let token = `Bearer ` + env.PUBLIC_API_KEY;
        let url = env.PUBLIC_API_URL + "/api/Producer/" + producer.id;
        const res = await fetch(url, {
            method: 'get',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => selectedProducer = data);
        producerResearch = producer.name;
    }

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
            <form class="flex justify-center" on:submit={searchMultiParameters(products, searchWord)}>
                <input bind:value={searchWord}
                       class="w-3/4 mt-4 h-12 rounded-r-none rounded-l shadow-sm focus:ring-red-900 focus:border-red-900 border-gray-300"
                       placeholder='Rechercher un produit ' type="text"/>
                <Button class="!w-1/2 h-12 !bg-red-900 hover:!bg-black border-red-900 focus:ring-red-900 focus:border-red-900 rounded-r rounded-l-none"
                        on:click={() => products = searchMultiParameters(products, searchParam, searchWord)}
                        style="width: fit-content; margin-top: 1rem; margin-bottom: 1rem;">
                    <MagnifyingGlass/>
                    Rechercher
                </Button>
            </form>
            {#if searchWord}
                <h1>Résultats pour la recherche : {searchWord}</h1>
                {#if searchMultiParameters(products, searchWord).length < 1 }
                    <NoMatch searchWord={searchWord}/>
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

        <TabItem class="w-full" on:click={() => {selectedProducer = null}}>
            <span slot="title">Les producteurs</span>
            {#if data.producers}
                {#if selectedProducer != null}
                    {#if selectedProducer.bottles != null && selectedProducer.bottles.lenght < 1}
                        <NoMatch searchWord={searchWord}/>
                    {/if}
                    <div class="products">
                        <h1>{producerResearch}</h1>

                        <div class="shadow-sm bg-gray-200 flex flex-col ">
                            <div class="product-list max-h-[50vh] flex-grow overflow-y-auto">
                                {#each selectedProducer.bottles as item}
                                    <ProductCard item={item} {data}/>
                                {/each}
                            </div>
                            <section class="products">
                                <div class="product-list bg-red-900 shadow-sm ">
                                    {#each data.producers as producer}
                                        <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg hover:!scale-110"
                                              style="width: fit-content;">
                                            <img src="/img/wineyard.jpeg" alt="pinard"/>
                                            <h4 class="font-extrabold uppercase p-6">{producer.name}</h4>
                                            <div class="pb-8">
                                                <p>{producer.details}</p>
                                            </div>
                                            <Button class="relative right-0 btn" style="background :#5C1427"
                                                    on:click={() => selectProducer(producer)}>
                                                Produits
                                            </Button>
                                        </Card>
                                    {/each}
                                </div>
                            </section>
                        </div>
                    </div>
                {:else}
                    <section class="products">
                        {#if data.producers}
                            <div class="product-list bg-red-900 shadow-sm ">
                                {#each data.producers as producer}
                                    <Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg"
                                          style="width: fit-content;">
                                        <img src="/img/wineyard.jpeg" alt="pinard"/>
                                        <h4 class="font-extrabold uppercase p-6">{producer.name}</h4>
                                        <div class="pb-8">
                                            <p>{producer.details}</p>
                                        </div>
                                        <Button class="relative right-0 btn" style="background :#5C1427"
                                                on:click={() => selectProducer(producer)}>
                                            Produits
                                        </Button>
                                    </Card>
                                {/each}
                            </div>
                        {:else}
                            <Error404/>
                        {/if}
                    </section>
                {/if}
            {:else}
                <Error404/>
            {/if}
        </TabItem>
    </Tabs>
</div>

<style>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
    }

</style>