<script>
    import Checkout from "../../lib/Forms/Checkout.svelte";
    import NeedAuth from "$lib/Errors/NeedAuth.svelte";
    import {session} from "../../stores/stores.js";

    let isConnected;

    const unsubscribe =
        session.subscribe(value => {
            isConnected = value;
        });
</script>

{#if isConnected != 'true'}
    <NeedAuth />
{:else if  isConnected === 'true'}
    <div class="bg-white rounded-lg  w-3/4 ml-auto mr-auto bg-gray-100">
        <Checkout/>
    </div>
{/if}

