<script></script>

<div class="container p-12 mx-auto  text-red-900">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <form action class="justify-center w-full mx-auto" method="post">
                <div class="">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label class="block mb-3 text-sm font-semibold" for="firstName">Prénom</label>
                            <input class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                   name="firstName" placeholder="Prénom"
                                   type="text">
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label class="block mb-3 text-sm font-semibold" for="firstName">Nom</label>
                            <input class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                   name="Last Name" placeholder="Nom"
                                   type="text">
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold"
                                   for="Email">Email</label>
                            <input class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                   name="Last Name" placeholder="Email"
                                   type="text">
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label class="block mb-3 text-sm font-semibold"
                                   for="Address">Adresse postale</label>
                            <textarea
                                    class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    cols="20" name="Address" placeholder="Addresse postale" rows="4"></textarea>
                        </div>
                    </div>
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label class="block mb-3 text-sm font-semibold"
                                   for="city">Ville</label>
                            <input class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                   name="city" placeholder="Ville"
                                   type="text">
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label class="block mb-3 text-sm font-semibold" for="postcode">
                                Code postal</label>
                            <input class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                   name="postcode" placeholder="Code postal"
                                   type="text">
                        </div>
                    </div>

                    <div class="relative pt-3 xl:pt-6"><label class="block mb-3 text-sm font-semibold text-red-900"
                                                              for="note">Complément
                        d'adresse
                        (facultatif)</label><textarea
                            class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            name="note"
                            placeholder="Complément d'adresse" rows="4"></textarea>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
