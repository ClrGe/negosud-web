<script>
    import {Button, Modal} from "flowbite-svelte";
    import {cart} from "../../stores/stores.js";
    import {env} from "$env/dynamic/public";

    let cartItems = [];
    let cart_sum = 0;
    let totalPrice = 0;
    let orderTotal = 0;
    let isOpenModal = false;
    let orderStatus ='';

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }

    const unsubscribe = cart.subscribe(items => {
        cartItems = Object.values(items);
        const itemValues = Object.values(items);
        orderTotal = 0;
        totalPrice = 0;
        cart_sum = 0;
        itemValues.forEach(item => {
            cart_sum += item.count;
            totalPrice = item.count * item.customerPrice;
            orderTotal += totalPrice;
        });
    });

    let order = {
        "reference": "toto",
        "description": "toto",
    }

    // let customer = {
    //     "firstName": document.getElementById("firstName").value,
    //     "lastName": document.getElementById("lastName").value,
    //     "email": document.getElementById("email").value,
    //     "address": document.getElementById("address").value,
    //     "city": document.getElementById("city").value,
    //     "postcode": document.getElementById("postcode").value,
    //     "country": document.getElementById("country").value,
    // }

    async function postOrder() {
        let token = `Bearer ` + env.PUBLIC_API_KEY
        let url = env.PUBLIC_API_URL + "/api/customerorder/addcustomerorder"
        const res = await fetch(url, {
            credentials: 'include',
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "order": order,
                    "user": customer
                }
            )
        })
        if (res.ok) {
            orderStatus = "Votre commandé a bien été prise en compte !"
        } else {
            orderStatus = "La commande n'a pas pu être envoyée"
        }
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
                                   name="lastName" placeholder="Nom"
                                   type="text">
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold"
                                   for="email">Email</label>
                            <input required class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="lastName" placeholder="Email"
                                   type="text" >
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold" for="adress">Adresse postale</label>
                            <input class="w-full px-4 py-3 text-xs border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="adress" placeholder="Addresse postale" rows="4">
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
    <div class=" card rounded-lg h-auto !bg-transparent">
        <div class="flex h-full w-full ">
            <div class="left_side truncate relative rounded-l-lg h-auto w-full truncate">
                <img class="h-full w-full" src="https://imgur.com/cOwXXFq.jpg" alt="payment">
                <div class="h-48 w-72 opacity-70 rounded-lg  bg-blue-300 absolute top-28 left-8 ">
                    <div class="p-2 mt-3 text-black font-semibold">
                        <p>Numéro de carte</p>
                        <p class="border-b-2 text-white shown_number">0000 0000 0000 0000</p>
                    </div>
                    <div class="flex gap-3 mt-3">
                        <div class="p-2 mt-2 text-black font-semibold">
                            <p>Expiration</p>
                            <p class="border-b-2 text-white shown_expiry">mm/aaaa</p>
                        </div>
                        <div class="p-2 mt-2 text-black font-semibold">
                            <p>CVV</p>
                            <p class="border-b-2 text-white shown_cvv">000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 right_side truncate h-auto w-full bg-gray-100 rounded-r-lg">
                <p class="mt-3 text-xl font-semibold">Moyen de paiement</p>
                <div class="mt-5 relative">
                    <input class="input_number h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900"
                           data-accept="\d" data-slots="0" onkeyup="Number(this.value)" placeholder="0000 0000 0000 0000" size="19"
                           type="text" name="cb-num" required>
                    <label class="text-xs absolute -top-4 left-0">Numéro de carte</label>
                </div>
                <div class="mt-7 w-full flex gap-3">
                    <div class=" relative w-full">
                        <input class="input_expiry h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900"  name="cb-exp"
                               data-slots="my" onkeyup="Expiry(this.value)" placeholder="**/****" type="text">
                        <label class="text-xs absolute -top-4 left-0">Expiration</label>
                    </div>
                    <div class=" relative w-full">
                        <input class="input_cvv h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" name="cb-cvv"
                               data-accept="\d" data-slots="0" onkeyup="Cvv(this.value)" placeholder="000" size="3"
                               type="text">
                        <label class="text-xs absolute -top-4 left-0">CVV</label>
                    </div>
                </div>
                <div class="mt-7 relative">
                    <input class="h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" placeholder="Jean Bon" type="text" name="cb-name">
                    <label class="text-xs absolute -top-4 left-0" onkeyup="Name(this.value)">
                        Titulaire de la carte
                    </label>
                </div>
                <div class="mb-5">
                    <button class="pay_now mt-4 outline-none rounded-lg text-white h-12 w-full bg-red-900 text-sm cursor-pointer transition-all hover:!scale-110" on:click={postOrder}>
                        <i class="fa fa-lock mr-1 "></i>Valider
                    </button>
                </div>
            </div>
        </div>
    </div>
</Modal>