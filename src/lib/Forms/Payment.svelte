<script>

    import {get} from "svelte/store";
    import {env} from "$env/dynamic/public";
    import {session} from "../../stores/stores.js";
    import {goto} from "$app/navigation";

    let cart = get(cart);
    let user = get(user);


    let order = {
        cart: cart,
    }

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
                    email: document.querySelector("input[name='email']").value,
                    password: document.querySelector("input[name='password']").value
                }
            )
        })
        if (res.ok) {
            session.set("true")
            goto('/products')
        } else {
            alert("Identifiants incorrects")
        }
    }

    const unsubscribe = cart.subscribe(items => {
        const itemValues = Object.values(items);
        cart_sum = 0;
        itemValues.forEach(item => {
            cart_sum += item.count;
        });
        session.subscribe(value => {
            sessionValue = value;
        });
    });
</script>

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
                <button class="pay_now mt-4 outline-none rounded-lg text-white h-12 w-full bg-red-900 text-sm cursor-pointer transition-all hover:!scale-110">
                    <i class="fa fa-lock mr-1 "></i>Valider
                </button>
            </div>
        </div>
    </div>
</div>