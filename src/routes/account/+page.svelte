<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem class="w-full" open>
        <span slot="title">Mon profil</span>
        <p class="text-sm text-gray-500 dark:text-gray-400"><b>Profil:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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