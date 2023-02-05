<script>
    import {Tabs, TabItem, Label, Input, Checkbox, Button} from 'flowbite-svelte';
</script>

<div class="content">
<Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem class="w-full" open>
        <span slot="title">Mon profil</span>
        <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <Label for="first_name" class="mb-2">Prénom</Label>
                    <Input type="text" id="first_name" placeholder="John" required />
                </div>
                <div>
                    <Label for="last_name" class="mb-2">Nom</Label>
                    <Input type="text" id="last_name" placeholder="Doe" required />
                </div>
                <div class="mb-6">
                    <Label for="email" class="mb-2">Email</Label>
                    <Input type="email" id="email" placeholder="john.doe@negosud.com" required />
                </div>

                <div>
                    <Label for="phone" class="mb-2">Téléphone</Label>
                    <Input type="tel" id="phone" placeholder="0000000000" required />
                </div>
            </div>
            <div>
                <Label for="adress" class="mb-2">Adresse de livraison</Label>
                <Input type="text" id="adress" placeholder="adresse" required />
            </div>
            <div>
                <Label for="adress" class="mb-2">Adresse de facturation</Label>
                <Input type="text" id="adress" placeholder="adresse" required />
            </div>
            <Button type="submit">Mettre à jour</Button>
            <Button >Changer mon mot de passe</Button>

        </form>

    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Commandes</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><b>Commandes:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Paramètres</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><b>Paramètres:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Recommandations</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><b>Recommandations:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
</Tabs>
</div>

<style>
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        max-width: 100rem;
    }
</style>