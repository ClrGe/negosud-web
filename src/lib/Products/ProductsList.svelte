<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import ProductCard from "$lib/Products/ProductCard.svelte";
    import Error404 from "$lib/Errors/Error404.svelte";
    import {page} from "$app/stores";

    export let data;
    let products = data.bottles;
    let selected;
    let wineType = $page.url.searchParams.get('type');

    let options = [
        {value: '', label: 'Tous les produits'},
        {value: 'Rouge', label: 'Vins rouges'},
        {value: 'Blanc', label: 'Vins blancs'},
        {value: 'Rose', label: 'Vins rosé'},
        {value: 'Petillant', label: 'Pétillants'},
        {value: 'Spirit', label: 'Spiritueux'}
    ];

    export function filterByType(products, wineType) {
        if (wineType) {
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

{#if $page.url.searchParams.get('type') === 'Rouge'}
    <section class="products">
        <div class="product-list shadow-sm bg-red-900">
            {#each filterByType(products, 'Rouge') as item}
                <ProductCard {item}/>
            {/each}
        </div>
    </section>
{:else if $page.url.searchParams.get('type') === 'Blanc'}
    <section class="products">
        <div class="product-list shadow-sm bg-red-900">
            {#each filterByType(products, 'Blanc') as item}
                <ProductCard {item}/>
            {/each}
        </div>
    </section>
{:else if $page.url.searchParams.get('type') === 'Rose'}
    <section class="products">
        <div class="product-list shadow-sm bg-red-900">
            {#each filterByType(products, 'Rose') as item}
                <ProductCard {item}/>
            {/each}
        </div>
    </section>
{:else if $page.url.searchParams.get('type') === 'Petillant'}
    <section class="products">
        <div class="product-list shadow-sm bg-red-900">
            {#each filterByType(products, 'Petillant') as item}
                <ProductCard {item}/>
            {/each}
        </div>
    </section>
{:else if $page.url.searchParams.get('type') === 'Spirit'}
    <section class="products">
        <div class="product-list shadow-sm bg-red-900">
            {#each filterByType(products, 'Spirit') as item}
                <ProductCard {item}/>
            {/each}
        </div>
    </section>
{:else if $page.url.searchParams.get('type') === null}
    <select bind:value={selected} on:change="{() => wineType === selected.value}" placement="right-start">
        {#each options as option}
            <option value={option}>
                {option.label}
            </option>
        {/each}
    </select>

    {#if data.bottles }
        <section class="products">
            <div class="product-list shadow-sm bg-red-900">
                {#if selected && selected.value === '' && wineType === ''}
                    {#each filterByType(products, selected.value) as item}
                        <ProductCard {item}/>
                    {/each}
                {:else if selected && selected.value === 'Rouge' || wineType === 'Rouge'.toLowerCase()}
                    {#each filterByType(products, 'Rouge') as item}
                        <ProductCard {item}/>
                    {/each}
                {:else if selected && selected.value === 'Blanc' || wineType === 'Blanc' }
                    {#each filterByType(products, 'Blanc') as item}
                        <ProductCard {item}/>
                    {/each}
                {:else if selected && selected.value === 'Rose' || wineType === 'Rose'}
                    {#each filterByType(products, selected.value) as item}
                        <ProductCard {item}/>
                    {/each}
                {:else if selected && selected.value === 'Petillant' || wineType === 'Petillant'}
                    {#each filterByType(products, selected.value) as item}
                        <ProductCard {item}/>
                    {/each}
                {:else if selected && selected.value === 'Spirit' || wineType === 'Spirit'}
                    {#each filterByType(products, selected.value) as item}
                        <ProductCard {item}/>
                    {/each}
                {:else}
                    {#each products as item}
                        {#if item.wineType != 'Spirit'}
                        <ProductCard {item}/>
                        {/if}
                    {/each}
                {/if}
            </div>
        </section>
    {:else}
        <Error404/>
    {/if}
{/if}

<style>
    .product-list {
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
    }
</style>