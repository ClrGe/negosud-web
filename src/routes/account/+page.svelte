<script>
    import {Button, TabItem, Tabs} from 'flowbite-svelte';
    import UserData from "../../lib/Forms/UserData.svelte";
</script>

<div class="content">
    <Tabs defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" style="full">
        <TabItem class="w-full" open>
            <span slot="title">Profil</span>

            <UserData/>
            <div class="mt-4">
                <Button class="w-full px-6 py-2 text-white bg-red-900 hover:bg-black">Mettre les infomations à jour
                </Button>
            </div>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Commandes</span>
            <p class="text-sm text-gray-500 dark:text-gray-400"><b>Commandes:</b> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Paramètres</span>
            <p class="text-sm text-gray-500 dark:text-gray-400"><b>Paramètres:</b> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Recommandations</span>
            <p class="text-sm text-gray-500 dark:text-gray-400"><b>Recommandations:</b> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
    </Tabs>
</div>

<style>
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        max-width: 100rem;
        background: transparent !important;
        color: black !important;
    }
</style>