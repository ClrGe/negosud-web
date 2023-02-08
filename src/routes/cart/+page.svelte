<script>
	import Cart from "../../Components/Cart/Cart.svelte";
    import {Button} from "flowbite-svelte";
</script>
<div class="mt-16 w-1/2 ml-auto mr-auto bg-white ml-auto mr-auto font-bold  p-10 text-justify rounded-lg flex justify-center flex-col">

    <Cart />
    <Button class="bg-red-900 text-white hover:!bg-red-200 hover:!text-red-900 hover:!border-red-900"><a href="/payment">Commander</a></Button>

</div>
