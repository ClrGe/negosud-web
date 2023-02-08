<script>
    import {Button} from "flowbite-svelte";
</script>

<div class="container p-12 mx-auto  text-red-900">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <form class="justify-center w-full mx-auto" method="post" action>
                <div class="">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label for="firstName" class="block mb-3 text-sm font-semibold">Prénom</label>
                            <input name="firstName" type="text" placeholder="Prénom"
                                   class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label for="firstName" class="block mb-3 text-sm font-semibold">Nom</label>
                            <input name="Last Name" type="text" placeholder="Nom"
                                   class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label for="Email"
                                   class="block mb-3 text-sm font-semibold">Email</label>
                            <input name="Last Name" type="text" placeholder="Email"
                                   class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label for="Address"
                                   class="block mb-3 text-sm font-semibold">Adresse postale</label>
                            <textarea
                                    class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    name="Address" cols="20" rows="4" placeholder="Addresse postale"></textarea>
                        </div>
                    </div>
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label for="city"
                                   class="block mb-3 text-sm font-semibold">Ville</label>
                            <input name="city" type="text" placeholder="Ville"
                                   class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label for="postcode" class="block mb-3 text-sm font-semibold">
                                Code postal</label>
                            <input name="postcode" type="text" placeholder="Code postal"
                                   class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                        </div>
                    </div>

                    <div class="relative pt-3 xl:pt-6"><label for="note"
                                                              class="block mb-3 text-sm font-semibold text-red-900">Complément d'adresse
                        (facultatif)</label><textarea name="note"
                                                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                    rows="4" placeholder="Complément d'adresse"></textarea>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
