<script>
    import {Button} from 'flowbite-svelte';
    import {goto} from "$app/navigation";
    import {ArrowDownRight, ArrowUturnRight} from "svelte-heros-v2";

    function goToLogin() {
        goto('/login')
    }

</script>
<div class="flex justify-center mt-auto mb-auto">
    <div class="w-1/3 py-16 p-4 rounded-lg shadow-lg bg-white/80">
        <p class="text-center  font-extrabold text-4xl p-6">Veuillez vous authentifier</p>
        <div class="flex justify-center items-center">
            <Button class="w-56 px-6 py-2 text-white text-lg font-bold !bg-red-900 hover:!bg-black m-6" on:click={goToLogin}>
                Se connecter
            </Button>
        </div>
        <div class="flex items-center justify-center p-2">
            <p>Pas encore de compte ? </p>
        </div>
        <div class="flex items-center justify-center">
            <a href="/registration" class="font-extrabold text-red-900 flex flex-row">C'est par ici !</a>
        </div>
    </div>
</div>