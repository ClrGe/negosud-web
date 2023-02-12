<script>
    import {Button, TabItem, Tabs} from 'flowbite-svelte';
    import UserData from "../../lib/Forms/UserData.svelte";
    import {session} from "../../stores/stores.js";
    import {get} from "svelte/store";
    import {goto} from "$app/navigation";

    let orders = data.orders;
    export let data;

    let isConnected = get(session)
    $: if (isConnected !== 'true') {
        goto('/login')
    }

</script>

<div class="content">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" style="full">
        <TabItem class="w-full" open>
            <span slot="title">Profil</span>
            <h2 class="text-red-900 text-center font-extrabold text-2xl">Mettre vos informations à jour</h2>
            <UserData/>
            <div class="mt-4">
                <Button class="w-full px-6 py-2 text-white !bg-red-900 hover:!bg-black">
                    Mettre les infomations à jour
                </Button>
            </div>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Commandes</span>
            <h2 class="text-red-900 text-center font-extrabold text-2xl">Historique des commandes</h2>
            {#if orders}
                <div class="flex flex-col">
                    {#each orders as order}
                        <div class="flex flex-row justify-between items-center p-2 border-b border-gray-200">
                            <div class="flex flex-col">
                                <p class="text-sm text-gray-500 dark:text-gray-400">Commande n°{order.id}</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Date: {order.createdAt}</p>
                            </div>
                            <div class="flex flex-col">
                                <p class="text-sm text-gray-500 dark:text-gray-400 font-bold">Total: {order.reference}€</p>
                            </div>
                        </div>
                    {/each}
                </div>
            {:else}
                <p class="text-sm text-gray-500 dark:text-gray-400">Vous n'avez pas encore passé de commande.</p>
            {/if}
        </TabItem>
    </Tabs>
</div>

<style>
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        max-width: 100rem;
        background: transparent !important;
        color: black !important;
    }
</style>