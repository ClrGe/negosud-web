<script>
    /** @type {import('../../../../.svelte-kit/types/src/routes').PageData} */

    import ProductCard from "$lib/Products/ProductCard.svelte";
    import ProductDetails from "$lib/Products/ProductDetails.svelte";
    import Error404 from "$lib/Errors/Error404.svelte";
    import {page} from "$app/stores";
    import {ArrowUturnRight, ShoppingCart} from "svelte-heros-v2";
    import {Button, Modal} from "flowbite-svelte";

    export let data;
    let products = data.bottles;
    let selected;
    let wineType = $page.url.searchParams.get('type');
    let isOpenModal = false;

    let options = [
        {value: '', label: 'Tous les produits'},
        {value: 'Red', label: 'Vins rouges'},
        {value: 'White', label: 'Vins blancs'},
        {value: 'Sparkling', label: 'Pétillants'},
        {value: 'Spirits', label: 'Spiritueux'}
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

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
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
        <div class="product-list shadow-sm ">
            {#if selected && selected.value === '' && wineType === ''}
                {#each filterByType(products, selected.value) as item}
                    <ProductCard {item}/>
                {/each}
            {:else if selected && selected.value === 'Red' || wineType === 'Red'.toLowerCase()}
                {#each filterByType(products, 'Red') as item}
                    <ProductCard {item}/>
                {/each}
            {:else if selected && selected.value === 'White' || wineType === 'White' }
                {#each filterByType(products, 'White') as item}
                    <ProductCard {item}/>
                {/each}
            {:else if selected && selected.value === 'Sparkling' || wineType === 'Sparkling'}
                {#each filterByType(products, selected.value) as item}
                    <ProductCard {item}/>
                {/each}
            {:else if selected && selected.value === 'Spirits' || wineType === 'Spirits'}
                {#each filterByType(products, selected.value) as item}
                    <ProductCard {item}/>
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

<style>
    .product-list {
        padding: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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
</style>