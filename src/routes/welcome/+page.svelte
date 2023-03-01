<script>
    import {ShoppingCart, Star} from "svelte-heros-v2";
</script>


<div class="flex flex-row welcome w-1/2 bg-white/80 rounded-lg h-3/4 mt-auto mb-auto mr-auto ml-auto ">
    <div class="p-24"><img src="/img/pinard.png"/></div>
    <div class="flex mt-auto mb-auto  text-black flex-col">
        <div>
            <p class="font-extrabold text-6xl">Bienvenue !</p>
        </div>
        <div class="">
            <p class="italic text-2xl">Vous êtes maintenant connecté·e à votre espace Negosud</p>
        </div>
        <div class="mt-12 flex">
            <div class="mr-12 hover:scale-125 text-white bg-red-900 rounded-lg px-8 py-2">
                <a class="font-sans text-2xl flex flex-row" href="/products"> <Star />EXPLORER NOS PRODUITS</a>
            </div>
        </div>
    </div>

</div>

<style>

    @media (max-width: 768px) {
        * {
            box-sizing: border-box;
            text-align: center;
        }

        a {
            font-size: small;
        }

        .welcome {
            height: 50vh;
        }
    }
</style>