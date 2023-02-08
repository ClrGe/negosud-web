<script>
    import {Tabs, TabItem} from 'flowbite-svelte';
    import UserData from "../../Components/Forms/UserData.svelte";
</script>

<div class="content">
<Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem class="w-full" open>
        <span slot="title">Profil</span>

    <UserData />
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
        background: transparent !important;
        color: black !important;
    }
</style>