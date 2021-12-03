<template>
  <div>
    <header class="shadow py-4 sticky top-0 bg-white">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div>
          <img src="/logo.png" alt="Bol Touilleur" class="h-8">
        </div>
        <div>
          <button class="block md:hidden" @click="mobileMenu = !mobileMenu">
            MENU
          </button>
          <div class="justify-between items-center hidden md:flex">
            <nuxt-link to="/" class="mr-8">
              Accueil
            </nuxt-link>
          </div>
          <div v-show="mobileMenu" class="fixed top-0 right-0 bottom-0 left-0 z-50">
            <div class="fixed top-0 right-0 bottom-0 left-0 bg-gray-700 opacity-50" />
            <div class="fixed top-0 right-0 bottom-0 w-2/3 bg-white border-l px-4 py-8 flex flex-col text-xl">
              <button class="mb-6 text-gray-600 text-sm" @click="mobileMenu = !mobileMenu">
                Fermer
              </button>
              <nuxt-link to="/" class="mr-8">
                Accueil
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="presentation">
      <div class="py-16 container mx-auto px-4">
        <h1 class="font-bold text-4xl">
          Commandez votre BolTouilleur !
        </h1>

        <div class="pt-16 pb-24">
          <h2 class="sr-only">
            Checkout
          </h2>

          <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16" method="get" action="/confirmation">
            <div>
              <div>
                <h2 class="text-lg font-medium text-gray-900">
                  Informations de contact
                </h2>

                <div class="mt-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Adresse email</label>
                  <div class="mt-1">
                    <input id="email-address" type="email" name="email-address" autocomplete="email" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  </div>
                </div>
              </div>

              <div class="mt-10 border-t border-gray-200 pt-10">
                <h2 class="text-lg font-medium text-gray-900">
                  Informations de livraison
                </h2>

                <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Prénom</label>
                    <div class="mt-1">
                      <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Confirmez le prénom</label>
                    <div class="mt-1">
                      <input id="first-name-confirm" type="text" name="first-name" autocomplete="given-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Nom</label>
                    <div class="mt-1">
                      <input id="last-name-confirm" type="text" name="last-name" autocomplete="family-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Confirmez le nom</label>
                    <div class="mt-1">
                      <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="address" class="block text-sm font-medium text-gray-700">Adresse</label>
                    <div class="mt-1">
                      <input id="address" type="text" name="address" autocomplete="street-address" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <label for="city" class="block text-sm font-medium text-gray-700">Ville</label>
                    <div class="mt-1">
                      <input id="city" type="text" name="city" autocomplete="address-level2" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <label for="country" class="block text-sm font-medium text-gray-700">Pays</label>
                    <div class="mt-1">
                      <select id="country" name="country" autocomplete="country-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>France</option>
                        <option>Westeros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label for="region" class="block text-sm font-medium text-gray-700">Région</label>
                    <div class="mt-1">
                      <input id="region" type="text" name="region" autocomplete="address-level1" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>

                  <div>
                    <label for="postal-code" class="block text-sm font-medium text-gray-700">Code postal</label>
                    <div class="mt-1">
                      <input id="postal-code" type="text" name="postal-code" autocomplete="postal-code" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-10 border-t border-gray-200 pt-10">
                <fieldset>
                  <legend class="text-lg font-medium text-gray-900">
                    Expédition
                  </legend>

                  <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <!--
                      Checked: "border-transparent", Not Checked: "border-gray-300"
                      Active: "ring-2 ring-indigo-500"
                    -->
                    <label class="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none" @click="shippingMethod = 'free'">
                      <input
                        type="radio"
                        name="delivery-method"
                        value="Standard"
                        class="sr-only"
                        aria-labelledby="delivery-method-0-label"
                        aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1"
                      >
                      <div class="flex-1 flex">
                        <div class="flex flex-col">
                          <span id="delivery-method-0-label" class="block text-sm font-medium text-gray-900">
                            Gratuite
                          </span>
                          <span id="delivery-method-0-description-0" class="mt-1 flex items-center text-sm text-gray-500">
                            Livraison 24H
                          </span>
                          <span id="delivery-method-0-description-1" class="mt-6 text-sm font-medium text-gray-900">
                            0.00€
                          </span>
                        </div>
                      </div>
                      <!--
                        Not Checked: "hidden"

                        Heroicon name: solid/check-circle
                      -->
                      <svg
                        v-show="shippingMethod === 'free'"
                        class="h-5 w-5 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                    </label>

                    <!--
                      Checked: "border-transparent", Not Checked: "border-gray-300"
                      Active: "ring-2 ring-indigo-500"
                    -->
                    <label class="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none" @click="shippingMethod = 'idiot'">
                      <input
                        type="radio"
                        name="delivery-method"
                        value="Express"
                        class="sr-only"
                        aria-labelledby="delivery-method-1-label"
                        aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1"
                      >
                      <div class="flex-1 flex">
                        <div class="flex flex-col">
                          <span id="delivery-method-1-label" class="block text-sm font-medium text-gray-900">
                            Payante
                          </span>
                          <span id="delivery-method-1-description-0" class="mt-1 flex items-center text-sm text-gray-500">
                            Livraison en 8 jours
                          </span>
                          <span id="delivery-method-1-description-1" class="mt-6 text-sm font-medium text-gray-900">
                            9.99€
                          </span>
                        </div>
                      </div>
                      <!--
                        Not Checked: "hidden"

                        Heroicon name: solid/check-circle
                      -->
                      <svg
                        v-show="shippingMethod === 'idiot'"
                        class="h-5 w-5 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <div class="absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                    </label>
                  </div>
                </fieldset>
              </div>

              <!-- Payment -->
              <div class="mt-10 border-t border-gray-200 pt-10">
                <h2 class="text-lg font-medium text-gray-900">
                  Moyen de paiement
                </h2>

                <fieldset class="mt-4">
                  <legend class="sr-only">
                    Moyen de paiement
                  </legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      Paiement à la livraison
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <!-- Order summary -->
            <div class="mt-10 lg:mt-0">
              <h2 class="text-lg font-medium text-gray-900">
                Commande
              </h2>

              <div class="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 class="sr-only">
                  Article dans votre panier
                </h3>
                <ul role="list" class="divide-y divide-gray-200">
                  <li class="flex py-6 px-4 sm:px-6">
                    <div class="flex-shrink-0">
                      <img src="/big-picture.png" alt="Image" class="w-20 rounded-md">
                    </div>

                    <div class="ml-6 flex-1 flex flex-col">
                      <div class="flex">
                        <div class="min-w-0 flex-1">
                          <h4 class="text-sm">
                            <a href="#" class="font-medium text-gray-700 hover:text-gray-800">
                              Bol Touilleur
                            </a>
                          </h4>
                        </div>
                      </div>

                      <div class="flex-1 pt-2 flex items-end justify-between">
                        <p class="mt-1 text-sm font-medium text-gray-900">
                          45.00€
                        </p>
                      </div>
                    </div>
                  </li>

                  <!-- More products... -->
                </ul>
                <dl class="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div class="flex items-center justify-between">
                    <dt class="text-sm">
                      Sous-total
                    </dt>
                    <dd class="text-sm font-medium text-gray-900">
                      45.00€
                    </dd>
                  </div>
                  <div class="flex items-center justify-between">
                    <dt class="text-sm">
                      Livraison
                    </dt>
                    <dd class="text-sm font-medium text-gray-900">
                      45€ + Votre choix
                    </dd>
                  </div>
                  <div class="flex items-center justify-between">
                    <dt class="text-sm">
                      Taxes
                    </dt>
                    <dd class="text-sm font-medium text-gray-900">
                      Trop
                    </dd>
                  </div>
                  <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt class="text-base font-medium">
                      Total
                    </dt>
                    <dd class="text-base font-medium text-gray-900">
                      45.00€ + Livraison
                    </dd>
                  </div>
                </dl>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button type="submit" class="w-full bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                    VALIDER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobileMenu: false,
      fakePopup: false,
      showCookies: true,
      shippingMethod: ''
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
