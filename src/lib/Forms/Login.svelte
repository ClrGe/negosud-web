<script>
    import {Button, Checkbox, Input, Label} from "flowbite-svelte";
    import {session} from "../../stores/stores.js";
    import {env} from "$env/dynamic/public";
    import { goto } from '$app/navigation';

    let sessionValue;
    const unsubscribe = session.subscribe(value => {
        sessionValue = value;
    });
    async function login() {
        let token = `Bearer ` + env.PUBLIC_API_KEY
        let url = env.PUBLIC_API_URL + "/api/authentication/login"
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
            goto('/welcome')
        } else {
            alert("Identifiants incorrects")
        }
    }
</script>

<div class="!px-24 py-12 !bg-transparent">
    <img class="!w-1/2 lg:!h-1/2 !ml-auto !mr-auto !w-32" src="/img/logo.png" alt="logo_negosud">
    <Label class="!left-8 lg:py-4 !ml-auto mr-auto space-y-2">
        <span class="font-extrabold text-red-900 text-lg">Email</span>
        <Input class="!mb-4 py-4 " name="email" placeholder="exemple@negosud.fr" required type="email"/>
    </Label>
    <Label class="space-y-2">
        <span class="font-extrabold text-red-900 text-lg">Mot de passe</span>
        <Input class="!mb-10 py-4" name="password" placeholder="•••••" required type="password"/>
    </Label>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 pb-10">
        Pas encore inscrit ?
        <a class="hover:underline dark:text-red-500" href="/registration" style="color :#670302">S'inscrire</a>
    </div>
    <Button class="w-full1" style="background :#670302" type="submit" on:click={login} >Se connecter</Button>

</div>