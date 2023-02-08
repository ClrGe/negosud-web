<script>
    import { cart } from "../../Stores/stores.js";
    import {Button, Card} from "flowbite-svelte";
    export let item;
    let { name, price, count } = item;
    const countButtonHandler = e => {
        if (e.target.classList.contains("add")) {
            count++;
        } else if (count >= 1) {
            count--;
        }
        cart.update(n => ({ ...n, [name]: { ...n[name], count } }));
    };
    const removeItem = () => {
        cart.update(n => {
            delete n[name];
            return n;
        });
    };
</script>

<div class="row">
    <Card class="item-meta-data">
        <h3 class="font-bold text-2xl text-black">{name}</h3>
        <p class="font-bold">{price} €</p>
        <div class="col">
            <Button class="bg-red-900 text-white hover:!bg-red-200 hover:!text-red-900 hover:!border-red-900" on:click={countButtonHandler}>+</Button> {' '}
            <span>{count}</span> {' '}
            <Button class="bg-red-900 text-white hover:!bg-red-200 hover:!text-red-900 hover:!border-red-900" on:click={countButtonHandler}>-</Button> {' '}
            <Button class="bg-red-900 text-white hover:!bg-red-200 hover:!text-red-900 hover:!border-red-900" on:click={removeItem}>
                Retirer
            </Button>
        </div>
    </Card>
</div>