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
    <div id="top" class="py-32 container mx-auto px-4 text-center">
      <div>
        <img src="big-picture.png" alt="Bol Touilleur" class="mx-auto">
      </div>
      <div class="mt-16">
        <h3 class="text-primary font-bold text-4xl">
          #iloveemptybowl
        </h3>
        <h1 class="font-bold text-5xl">
          Pas d'bol ! Ici, c'est vide !
        </h1>
      </div>
    </div>
    <div id="presentation" class="bg-primary-light">
      <div class="py-16 container mx-auto px-4">
        <p class="text-justify">
          Il semblerais que la page que vous cherchez n'existe pas*. C'pas d'bol !
        </p>
      </div>
    </div>
    <div class="py-2">
      <div class="container mx-auto px-4 text-center text-gray-400">
        <p class="text-xs">
          *Toute comme notre unique client satisfait.
        </p>
      </div>
    </div>
    <div class="py-16">
      <div class="container mx-auto px-4 text-center">
        <img src="logo.png" alt="Bol Touilleur" class="mx-auto h-8">
      </div>
    </div>
    <div v-if="showCookies" class="fixed left-0 bottom-0 right-0 py-4 bg-primary text-white">
      <div class="container flex justify-between items-center mx-auto px-4">
        <div>
          Ce site n'utilise aucun cookie. Notre business c'est les soupes, pas les cookies
        </div>
        <button class="bg-white text-primary px-8 py-3 font-bold" @click="showCookies = false">
          C'est noté !
        </button>
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
      showCookies: true
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
