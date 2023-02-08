<script>
    import {Button, Checkbox, Input, Label} from "flowbite-svelte";
</script>

<form action="#" class="flex flex-col space-y-6">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Merci de vous identifier</h3>
    <Label class="space-y-2">
        <span>Email</span>
        <Input name="email" placeholder="exemple@negosud.fr" required type="email"/>
    </Label>
    <Label class="space-y-2">
        <span>Mot de passe</span>
        <Input name="password" placeholder="•••••" required type="password"/>
    </Label>
    <div class="flex items-start">
        <Checkbox>Se souvenir de moi</Checkbox>
        <a class="ml-auto text-sm text-red-700 hover:underline dark:text-red-500" href="/static">Mot de passe oublié ?</a>
    </div>
    <Button class="w-full1" style="background :#670302" type="submit">Se connecter</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Pas encore inscrit ? <a class="hover:underline dark:text-red-500" href="/static" style="color :#670302">S'inscrire</a>
    </div>
</form>