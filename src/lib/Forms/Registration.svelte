<script>
    import {Button, Checkbox, Input, Label} from "flowbite-svelte";
    import {env} from "$env/dynamic/public";
    import {goto} from "$app/navigation";

    async function register() {
        let url = env.PUBLIC_API_URL + "/api/authentication/register"
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    firstName: document.querySelector("input[name='firstName']").value,
                    lastName: document.querySelector("input[name='name']").value,
                    //phone: document.querySelector("input[name='phone']").value,
                    //address: document.querySelector("input[name='address']").value,
                    //postal_code: document.querySelector("input[name='postal_code']").value,
                    //city: document.querySelector("input[name='city']").value,
                    //country: document.querySelector("input[name='country']").value,
                    email: document.querySelector("input[name='email']").value,
                    password: document.querySelector("input[name='password']").value,
                    role: {
                        "id": 3
                    }
                }
            )
        })
        if (res.ok) {
            goto('/login')
        } else {
            alert("Échec")
        }
    }
</script>

<h3 class="text-4xl uppercase font-sans font-extrabold text-center dark:text-white p-0">Inscription</h3>
<Label class="space-y-2">
    <span>Nom</span>
    <Input name="name" placeholder="Nom" required type="text"/>
</Label>
<Label class="space-y-2">
    <span>Prénom</span>
    <Input name="firstName" placeholder="Prénom" required type="text"/>
</Label>
<div class="flex">
    <Label class="space-y-2 w-1/2">
        <span>Email</span>
        <Input name="email" placeholder="exemple@negosud.fr" required type="email"/>
    </Label>
    <Label class="space-y-2 w-1/2">
        <span>Numéro de téléphone</span>
        <Input name="phone" placeholder="06 00 00 00 00" required type="tel"/>
    </Label>
</div>
<div class="flex">
    <Label class="space-y-2 w-1/2">
        <span>Mot de passe</span>
        <Input name="password" placeholder="•••••" required type="password"/>
    </Label>
    <Label class="space-y-2 w-1/2">
        <span>Confirmer le mot de passe</span>
        <Input name="password_confirmation" placeholder="•••••" required type="password"/>
    </Label>
</div>
<Label class="space-y-2">
    <span>Adresse</span>
    <Input name="address" placeholder="Adresse" required type="text"/>
</Label>
<div class="flex">
    <Label class="space-y-2 w-1/3">
        <span>Code postal</span>
        <Input name="postal_code" placeholder="Code postal" required type="text"/>
    </Label>
    <Label class="space-y-2 w-1/3">
        <span>Ville</span>
        <Input name="city" placeholder="Ville" required type="text"/>
    </Label>
    <Label class="space-y-2 w-1/3">
        <span>Pays</span>
        <Input name="country" placeholder="Pays" required type="text"/>
    </Label>
</div>

<div class="flex items-start">
    <Checkbox>Utiliser ces coordonnées pour la facturation</Checkbox>
</div>
<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
    Déjà inscrit ?
    <a class="hover:underline dark:text-red-500" href="/registration" style="color :#670302">Se connecter</a>
</div>
<Button class="w-full" style="background :#670302" type="submit" on:click={register}>S'inscrire</Button>
