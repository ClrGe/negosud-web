<script>
    import Login from "$lib/Forms/Login.svelte";
</script>


<div class="log mt-12 flex justify-center">
    <div class="top-12 mt-0  p-4 rounded-lg shadow-lg bg-black/80">
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