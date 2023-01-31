

<img src="https://images7.alphacoders.com/111/1113076.jpg" alt="vin"/>
<script>
    import { config } from 'dotenv';
    import { onMount } from "svelte";

    config();

    let apiUrl = process.env.API_URL;
    let bearerToken = process.env.BEARER_TOKEN;
    let products = [];
    async function fetchData() {
        const response = await fetch(apiUrl+'/api/bottle', {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });
        products = await response.json();
    }

    onMount(fetchData);
</script>

{#if products.length > 0}
        <ul>
            {#each products as item}
                <li>{item.id}</li>
            {/each}
        </ul>
{:else}
    Loading...
{/if}