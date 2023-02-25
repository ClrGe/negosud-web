<script>
    import {cart} from "../../stores/stores.js";
    import {Button, Card} from "flowbite-svelte";

    export let item;
    let cart_sum = 0;
    let totalPrice = 0;
    let {fullName, customerPricecurrentPrice, count} = item;
    export let orderTotal = 0;

    const unsubscribe = cart.subscribe(items => {
        const itemValues = Object.values(items);
        orderTotal = 0;
        totalPrice = 0;
        cart_sum = 0;
        itemValues.forEach(item => {
            cart_sum += item.count;
            totalPrice = item.count * item.customerPrice;
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
<Card class="item-meta-data h-56">

<div class="flex  justify-center items-center flex-rox w-full">
        <img src="/img/pinard.jpg" alt="wine" class="h-24">
        <h3 class="font-bold text-2xl text-left text-black w-56">{fullName}</h3>
        <span class="font-bold ml-4">{customerPrice}€ </span>
    </div>
        <div class="col mt-4">
            <Button class="!bg-red-900 !text-white hover:!bg-black !pt-0.5 !pb-0.5 ml-1" on:click={countButtonHandler}>-
            </Button> {' '}
            <span class="text-2xl">{count}</span> {' '}
            <Button class="!bg-red-900 !text-white hover:!bg-black pt-0.5 !pb-0.5 mr-1 add" on:click={countButtonHandler}>+
            </Button> {' '}
            <Button class="!bg-transparent !text-red-900 hover:!text-black !pt-1 !pb-1" on:click={removeItem}>
                Retirer
            </Button>
        </div>
</Card>
