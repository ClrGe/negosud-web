<script>
    import {cart} from "../../Stores/stores.js";
    import {Button, Card} from "flowbite-svelte";

    export let item;
    let cart_sum = 0;
    let totalPrice = 0;
    let {fullName, currentPrice, count} = item;
    export let orderTotal = 0;

    const unsubscribe = cart.subscribe(items => {
        const itemValues = Object.values(items);
        orderTotal = 0;
        totalPrice = 0;
        cart_sum = 0;
        itemValues.forEach(item => {
            cart_sum += item.count;
            totalPrice = item.count * item.currentPrice;
            orderTotal += totalPrice;
        });
    });
    const countButtonHandler = e => {
        if (e.target.classList.contains("add")) {
            count++;
        } else if (count >= 1) {
            count--;
        }
        cart.update(n => ({...n, [fullName]: {...n[fullName], count}}));
    };
    const removeItem = () => {
        cart.update(n => {
            delete n[fullName];
            return n;
        });
    };
</script>

<div class="row">
    <Card class="item-meta-data">
        <h3 class="font-bold text-2xl text-black">{fullName}</h3>
        <p class="font-bold">{currentPrice} € / unité</p>
        <div class="col">
            <Button class="!bg-red-900 !text-white hover:!bg-black add" on:click={countButtonHandler}>+
            </Button> {' '}
            <span>{count}</span> {' '}
            <Button class="!bg-red-900 !text-white hover:!bg-black" on:click={countButtonHandler}>-
            </Button> {' '}
            <Button class="!bg-red-900 !text-white hover:!bg-black" on:click={removeItem}>
                Retirer
            </Button>
        </div>
    </Card>
</div>