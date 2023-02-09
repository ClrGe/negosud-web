<script>
    import {Button, Chevron, Dropdown, DropdownItem} from "flowbite-svelte";
</script>

<div class="w-full flex justify-center mb-10 h-12 ">
    <Button style="background :#670302">
        <Chevron>Afficher ...</Chevron>
    </Button>
    <Dropdown>
        <DropdownItem>Tous les produits</DropdownItem>
        <DropdownItem class="flex items-center justify-between">
            <Chevron placement="right">Type de produit</Chevron>
        </DropdownItem>
        <Dropdown placement="right-start">
            <DropdownItem>Vins rouges</DropdownItem>
            <DropdownItem>Vins blancs</DropdownItem>
            <DropdownItem>Pétillants</DropdownItem>
            <DropdownItem>Spiritueux</DropdownItem>
        </Dropdown>
        <DropdownItem>Nouveautés</DropdownItem>
    </Dropdown>
</div>