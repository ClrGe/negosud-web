<script>
    import {Button, Modal} from "flowbite-svelte";
    import Payment from "$lib/Forms/Payment.svelte";

    let isOpenModal = false;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }

</script>

<div class="container p-12 mx-auto  text-red-900">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <span class="text-center font-extrabold text-3xl bg-white rounded-lg shadow-md py-5 mb-10 font-sans  ">Finaliser la commande</span>
            <form action class="justify-center w-full mx-auto" method="post">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label class="block mb-3 text-sm font-semibold" for="firstName">Prénom</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="firstName" placeholder="Prénom"
                                   type="text">
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label class="block mb-3 text-sm font-semibold" for="firstName">Nom</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="Last Name" placeholder="Nom"
                                   type="text">
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold"
                                   for="Email">Email</label>
                            <input required class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="Last Name" placeholder="Email"
                                   type="text" >
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold" for="Address">Adresse postale</label>
                            <input class="w-full px-4 py-3 text-xs border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="Address" placeholder="Addresse postale" rows="4">
                        </div>
                    </div>
                    <div class="mt-4 space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/3">
                            <label class="block mb-3 text-sm font-semibold" for="city">Ville</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="city" placeholder="Ville" type="text">
                        </div>
                        <div class="w-full lg:w-1/3 ">
                            <label class="block mb-3 text-sm font-semibold" for="postcode">Code postal</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="postcode" placeholder="Code postal" type="text">
                        </div>
                        <div class="w-full lg:w-1/3 ">
                            <label class="block mb-3 text-sm font-semibold" for="country">Pays</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="country" placeholder="Pays" type="text">
                        </div>

                    </div>

                <img alt="paiement" class="mr-auto ml-auto mt-10" src="src/lib/img/cb_logos.png" width="300px">
                <div class="mt-4 mb-4 flex justify-center items-center">
                    <Button class="w-1/2 ml-auto mr-auto px-6 py-2 text-white !bg-red-900 hover:!scale-110  shadow-lg" isOpenModal={isOpenModal} on:click={openModal} on:closeModal={closeModal}>
                        Procéder au paiement
                    </Button>
                </div>
            </form>
        </div>
    </div>
</div>
<Modal autoclose={false} bind:open={isOpenModal} class="w-full">
    <Payment />
</Modal>