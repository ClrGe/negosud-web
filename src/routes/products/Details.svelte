<script>
    import { createEventDispatcher } from 'svelte';

    export let isOpenModal;

    const dispatch = createEventDispatcher();

    function closeModal() {
        isOpenModal = false;
        dispatch('closeModal', { isOpenModal });
    }
</script>

<div id="background" style="--display: {isOpenModal ? 'block' : 'none'}" on:click={closeModal}></div>
<div id="details" style="--display: {isOpenModal ? 'block' : 'none'};">
    <div class="content">
        <h2>Détails du produit</h2>
        <p>Appelation :</p>
        <p>Producteur :</p>
        <p>Type de vin :</p>
        <p>Cépage :</p>
        <p>Volume :</p>
        <p>Année :</p>
        <p>Prix :</p>
        <button>Acheter</button>
    </div>
</div>

<style>
    h2 {
        text-align: center;
        font-weight: bold;
        font-size: large;
        padding: 3rem;
    }
    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #details {
        display: var(--display);
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 10px #000);
        width: 25%;
        height: 50%;
    }

    .content {
        padding-left: 5rem;
        padding-right: 5rem;
    }

    .content button {
        padding: 1em;
        color: white;
        background: #670302;
        border: none;
        font-weight: bold;
        margin-bottom: 5rem;
    }

    .content button:hover {
        padding: 1em;
        background: #bd9494;
        color: #670302;
        border: none;
        font-weight: bold;

    }

</style>