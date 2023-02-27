<script>
    import {Button, TabItem, Tabs} from 'flowbite-svelte';
    import UserData from "../../lib/Forms/UserData.svelte";
    import {session, user} from "../../stores/stores.js";
    import {goto} from "$app/navigation";    
    import {env} from "$env/dynamic/public";
    import NeedAuth from "$lib/Errors/NeedAuth.svelte";
    export let data;

    let orders = [];    

    getOwnOrders();

    async function getOwnOrders(){
        orders = await fetch(env.PUBLIC_API_URL + "/api/CustomerOrder/Own/" + localStorage.getItem("user_Id"), {
            method: 'get',
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => data);
        console.log(orders);
    }

    function orderTotal(order){
        let total = 0;
        order.lines.forEach(element => {
            total += element.bottle.customerPrice * element.quantity;
        });
        return total;
    }

    function formatDate (date){
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', };
        return date.toLocaleDateString("fr-FR", options);
    }

    let isConnected;

    const unsubscribe =
        session.subscribe(value => {
            isConnected = value;
    });
</script>

{#if isConnected != 'true'}
    <NeedAuth />
{:else if  isConnected === 'true'}

    <div class="content">
    <!-- <h2 class="text-red-900 text-center font-extrabold text-2xl">Bonjour {data.user.firstname} {data.user.lastname}</h2> -->
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" style="full">
        <TabItem class="w-full" open>
            <span slot="title">Profil</span>
            <h2 class="text-red-900 text-center font-extrabold text-2xl">Mettre vos informations à jour</h2>
            <UserData/>
            <div class="mt-4">
                <Button class="w-full px-6 py-2 text-white !bg-red-900 hover:!bg-black">
                    Mettre les informations à jour
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
                                <p class="text-sm text-gray-500 dark:text-gray-400">Date: {formatDate(new Date(order.date_Order))}</p>
                            </div>
                            <div class="flex flex-col">
                                <p class="text-sm text-gray-500 dark:text-gray-400 font-bold">Total: {orderTotal(order)}€</p>
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
{/if}

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