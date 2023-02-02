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
