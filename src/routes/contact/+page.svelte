<script>
    import { Button, Textarea, Input} from 'flowbite-svelte'
    let textareaprops = {
        id: 'message',
        name: 'message',
        label: 'Your message',
        rows: 4,
        placeholder: 'Écrivez votre message ici...',
    };

</script>
<div class="cards">
    <div class="item">
        <h1>Contact</h1>
        <div class="mb-6">
            <div class="mb-6">
                <Input id="email" type="email" placeholder="votre@email.fr"/>
            </div>
            <div class='mb-6'>
               <Input id='default-input' placeholder="Sujet" />
            </div>

            <Textarea {...textareaprops} />
            <Button type="submit" class="w-full1 bg-red-600 ">Se connecter</Button>
        </div>
    </div>
</div>



<style>
    .cards{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        max-width: 100rem;
    }

    .item{
        width: 100%;
        background-color: #f1f1f1;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
</style>