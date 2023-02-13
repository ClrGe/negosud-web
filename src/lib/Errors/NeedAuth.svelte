<script>
    import {Button} from 'flowbite-svelte';
    import {goto} from "$app/navigation";

    function goToLogin() {
        goto('/login')
    }

</script>
<div class="flex justify-center mt-16">
    <div class="w-1/3 py-16 p-4 rounded-lg shadow-lg bg-black/80 border border-white border-4">
        <h2 class="text-white text-center font-extrabold text-2xl">Veuillez vous authentifier</h2>
        <div class="flex justify-center items-center">
            <Button class="w-56 px-6 py-2 text-white !bg-red-900 hover:!bg-black m-6" on:click={goToLogin}>
                Se connecter
            </Button>
        </div>
        <div class="flex items-center justify-center p-10">
            <p class="text-white">Pas encore de compte ? </p>
            <a href="/registration" class="font-extrabold text-red-900"> Créer un compte</a>
        </div>
    </div>
</div>