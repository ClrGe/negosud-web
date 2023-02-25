<script>
    import {Card} from "flowbite-svelte";
    export let item;
    let {fullName, currentPrice, yearProduced, wineType, description, volume, alcoholPercentage} = item;
</script>

<Card class="p-16 m-8 w-full flex justify-center items-center shadow-lg hover:!scale-110 ">
    <h2>Détails du produit</h2>
    <div class="text">
        <p>Appelation : {fullName}</p>
        <p>Description :  {description}</p>
        <p>Type de vin :  {wineType}</p>
        <p>Cépage :</p>
        <p>Volume :  {volume} cL</p>
        <p>Alcool :  {alcoholPercentage} °</p>
        <p>Année :  {yearProduced}</p>
        <p>Prix :  {currentPrice}</p>
    </div>
</Card>