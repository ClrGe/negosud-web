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
                    <ProductCard {item}/>
                {/each}
            {/if}
        </div>
    </section>
{:else}
    <Error404/>
{/if}

<style>
    .product-list {
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.5);
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
</style>