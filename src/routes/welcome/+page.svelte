<script>
    import {ShoppingCart, Star} from "svelte-heros-v2";
</script>

<div class="w-3/4 bg-black/50 rounded-lg h-full flex justify-center  text-white items-center flex-col mr-auto ml-auto">
    <div class="">
        <h1>Bienvenue !</h1>
    </div>
    <div class="">
        <p class="italic">Vous êtes maintenant connecté·e à votre espace Negosud</p>
    </div>
    <div class="mt-12 flex">
        <div class="flex  hover:scale-125">
            <Star class="text-red-900 over:!text-white"/>
            <a class="mr-12 font-extrabold text-red-900 text-2xl over:!text-white"  href="/products">Explorer les produits</a>

        </div>
        <div class="flex hover:scale-125">
            <ShoppingCart class="text-red-900 "/>
            <a class="text-red-900 font-extrabold text-2xl" href="/checkout">Accéder au panier</a>
        </div>

    </div>

</div>