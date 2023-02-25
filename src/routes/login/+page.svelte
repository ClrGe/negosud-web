<script>
    import Login from "$lib/Forms/Login.svelte";
</script>


<div class="log mt-12 flex flex-col justify-center items-center mt-auto mb-auto ">
    <div class="top-12  rounded-lg shadow-lg bg-white/80 w-1/2">
       <Login />
    </div>
</div>

<style>

    @media (max-width: 768px){
        .container{
            visibility: hidden;
        }
    .mobile{
        visibility: visible;
    }}
    @media (min-width: 768px){
        .container{
            visibility: visible;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    .mobile{
        background: transparent;
        visibility: hidden;
    }
    }
</style>