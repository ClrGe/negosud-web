<script>
    import UserData from "../../Components/Forms/UserData.svelte";
    import {Button, Modal} from "flowbite-svelte";
    import Payment from "../../Components/Forms/Payment.svelte";

    let isOpenModal = false;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }

</script>

<div class="bg-white rounded-lg  w-3/4 ml-auto mr-auto bg-gray-100">

    <UserData/>

    <img alt="paiement" class="mr-auto ml-auto" src="src/lib/images/cb_logos.png" width="300px">
    <div class="mt-4 mb-4 flex justify-center items-center">
        <Button class="w-1/2 ml-auto mr-auto px-6 py-2 text-white !bg-red-900 hover:!bg-black" isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>
            Procéder au paiement
        </Button>
    </div>
</div>

<Modal autoclose={false} bind:open={isOpenModal} class="w-full">
    <Payment />
</Modal>