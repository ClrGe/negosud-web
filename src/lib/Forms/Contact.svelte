<script>
	import { env } from "$env/dynamic/public";
	import { Button } from "flowbite-svelte";
	import { user } from "../../stores/stores";

    let userMail = null;
    user.subscribe(value => userMail = value.email);

    async function contact(){
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let msg = document.getElementById("message").value;

        let token = `Bearer ` + localStorage.getItem("token");
        let url = env.PUBLIC_API_URL + "/api/Email/SendEmail"

        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "subject": subject,
                    "message": msg + "\n\n Email du client : " + email,
                }
            )
        });
    }


</script>

<section class="bg-transparent dark:bg-gray-900 text-white">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">Contactez-nous</h2>
        <p class="mb-8 lg:mb-16 font-light text-center dark:text-gray-400 sm:text-xl"><span class="text-2xl">Pour une demande particulière, un problème avec nos services ou si vous êtes un professionel :</span>
        </p>
        <form class="space-y-8">
            <div>
                <label class="block mb-2 text-sm font-medium dark:text-gray-300" for="email">Votre email</label>
                <input class="text-black shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                       id="email"
                       placeholder="client@negosud.fr"
                       required type="email"
                       value="{userMail ?? null}">
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium dark:text-gray-300" for="subject">Sujet</label>
                <input class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                       id="subject"
                       placeholder="Pourquoi nous écrivez vous ?"
                       required type="text">
            </div>
            <div class="sm:col-span-2">
                <label class="block mb-2 text-sm font-medium dark:text-gray-400" for="message">Votre message</label>
                <textarea
                        class="text-black block p-2.5 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        id="message"
                        placeholder="Expliquez votre besoin..."
                        rows="6"></textarea>
            </div>
            <Button class="!py-3 !px-5 !text-sm !font-medium !text-center !text-red-900 !rounded-lg !bg-white !sm:w-fit !hover:bg-primary-800 !focus:ring-4 !focus:outline-none !focus:ring-primary-300 !dark:bg-primary-600 !dark:hover:bg-primary-700 !dark:focus:ring-primary-800"
                    on:click={contact}>
                Envoyer
            </Button>
        </form>
    </div>
</section>