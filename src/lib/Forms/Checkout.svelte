<script>
    import {Button, Modal} from "flowbite-svelte";
    import {cart, user} from "../../stores/stores.js";
    import {env} from "$env/dynamic/public";

    let cartItems = [];
    let cart_sum = 0;
    let totalPrice = 0;
    let orderTotal = 0;
    let isOpenModal = false;
    let orderStatus ='';

    let userInfo =  null ;
    user.subscribe((value) => userInfo = value)

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

    async function postOrder() {        
        let token = `Bearer ` + localStorage.getItem("token"); //`Bearer ` + env.PUBLIC_API_KEY
        let customer = await fetch(env.PUBLIC_API_URL + "/api/User/" + localStorage.getItem("user_Id"), {
            method: 'get',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => data)
        
        let lines = [];

        cartItems.forEach(element => {
            console.log(element)
            let line = {
                "quantity": element.count,
                "bottle": {
                    "id": element.id
                }
            };
            lines.push(line)
        });

        let dateOrder = new Date(Date.now()); 
        let dateDelivery = new Date();
        dateDelivery.setDate(dateOrder.getDate() + 2);

        let deliveryAddress = {
            "addressLine1": document.getElementById("addressInput").value,
            "city": {
                "name": document.getElementById("cityInput").value,
                "zipCode": document.getElementById("zipCodeInput").value,
                "country": {
                    "name": document.getElementById("countryInput").value,
                }
            }
        }

        let reference = "#" + String(dateOrder.getFullYear()) + String(dateOrder.getMonth()) + String(dateOrder.getDay());

        let url = env.PUBLIC_API_URL + "/api/CustomerOrder/AddCustomerOrder"
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "reference": reference,
                    "date_Order": dateOrder ,
                    "date_Delivery": dateDelivery,
                    "customer": customer,
                    "lines": lines,
                    "deliveryAddress": deliveryAddress,
                }
            )
        })
        if (res.ok) {
            orderStatus = "Votre commandé a bien été prise en compte !"                       
            cartItems = [];
        } else {
            orderStatus = "La commande n'a pas pu être envoyée"
        }
        console.log(res) 
        closeModal()
    }
</script>


<div class="container p-12 mx-auto  text-red-900">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <span class="text-center font-extrabold text-3xl bg-white rounded-lg shadow-md py-5 mb-10 font-sans  ">Finaliser la commande</span>
            <form class="justify-center w-full mx-auto" method="post">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label class="block mb-3 text-sm font-semibold" for="firstName">Prénom</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="firstName" placeholder="Prénom"
                                   type="text"
                                   value="{userInfo.firstName}"
                                   disabled>
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label class="block mb-3 text-sm font-semibold" for="firstName">Nom</label>
                            <input class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="lastName" placeholder="Nom"
                                   type="text"
                                   value="{userInfo.lastName}"
                                   disabled>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold"
                                   for="email">Email</label>
                            <input required class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="lastName" placeholder="Email"
                                   type="text"
                                   value="{userInfo.email}"
                                   disabled>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold" for="address">Adresse postale</label>
                            <input id="addressInput" class="w-full px-4 py-3 text-xs border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="address" placeholder="Addresse postale" rows="4">
                        </div>
                    </div>
                    <div class="mt-4 space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/3">
                            <label class="block mb-3 text-sm font-semibold" for="city">Ville</label>
                            <input id="cityInput" class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="city" placeholder="Ville" type="text">
                        </div>
                        <div class="w-full lg:w-1/3 ">
                            <label class="block mb-3 text-sm font-semibold" for="zipCode">Code postal</label>
                            <input id="zipCodeInput" class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="zipCode" placeholder="Code postal" type="text">
                        </div>
                        <div class="w-full lg:w-1/3 ">
                            <label class="block mb-3 text-sm font-semibold" for="country">Pays</label>
                            <input id="countryInput" class="w-full px-4 py-3 text-sm border !border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-red-900"
                                   name="country" placeholder="Pays" type="text">
                        </div>

                    </div>

                <img alt="paiement" class="mr-auto ml-auto mt-10" src="/img/cb_logos.png" width="300px">
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