<script>   
	import { env } from '$env/dynamic/public';
    import {
        Button,
        Checkbox,
        Input,
        Label,
    } from 'flowbite-svelte'

    let firstName = "";
    let lastName = "";
    let email = "";
	let password = "";
    let confirmPassword = "";
	let error = false;
    let errorMsg = "";

    function submit() {
        if(password != confirmPassword){
            error = true;
            errorMsg = "Les mots de passe doivent être identiques"
            return;
        }
        error = false;
        register();
    }


    async function register() {
        let url = env.PUBLIC_API_URL + "/api/Authentication/Register";
        const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({email, password, firstName, lastName}),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        });
        if (!response.ok) {
        error = (await response.json()).message;
        return;
        }
        const data = await response.json();

        const token = document.cookie.split("=")[1];	
        env.PUBLIC_API_KEY = token;
    }
</script>

<div class="content rounded-md shadow-md p-12 bg-white mx-auto my-auto w-1/3">
    {#if error}
        <span class="text-red-500 mb-2">{errorMsg}</span>
    {/if}
    <form on:submit|preventDefault={submit} class="flex flex-col space-y-6">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Merci de vous identifier</h3>
        <Label class="space-y-2">
            <span>Prénom</span>
            <Input name="firstName" placeholder="John" required type="text" bind:value={firstName}/>
        </Label>
        <Label class="space-y-2">
            <span>Nom</span>
            <Input name="lastName" placeholder="Doe" required type="text" bind:value={lastName}/>
        </Label>
        <Label class="space-y-2">
            <span>Email</span>
            <Input name="email" placeholder="exemple@negosud.fr" required type="email" bind:value={email}/>
        </Label>
        <Label class="space-y-2">
            <span>Mot de passe</span>
            <Input name="password" placeholder="•••••" required type="password" bind:value={password}/>
        </Label>
        <Label class="space-y-2">
            <span>Confirmer le mot de passe</span>
            <Input name="confirmPassword" placeholder="•••••" required type="password" bind:value={confirmPassword}/>
        </Label>
        <Button class="w-full1" style="background :#670302" type="submit">S'inscire</Button>
    </form>
</div>