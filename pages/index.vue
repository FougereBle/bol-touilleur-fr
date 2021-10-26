<template>
  <div>
    <header class="shadow py-4 sticky top-0 bg-white">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div>
          <img src="/public/logo.png" alt="Bol Touilleur" class="h-8">
        </div>
        <div>
          <button class="block md:hidden" @click="mobileMenu = !mobileMenu">
            MENU
          </button>
          <div class="justify-between items-center hidden md:flex">
            <a href="#top" class="mr-8">Présentation</a>
            <a href="#presentation" class="mr-8">Avantages</a>
            <a href="#buy">Commander</a>
          </div>
          <div v-show="mobileMenu" class="fixed top-0 right-0 bottom-0 left-0 z-50">
            <div class="fixed top-0 right-0 bottom-0 left-0 bg-gray-700 opacity-50" />
            <div class="fixed top-0 right-0 bottom-0 w-2/3 bg-white border-l px-4 py-8 flex flex-col text-xl">
              <button class="mb-6 text-gray-600 text-sm" @click="mobileMenu = !mobileMenu">
                Fermer
              </button>
              <a href="#top" class="mb-8" @click="mobileMenu = false">Présentation</a>
              <a href="#presentation" class="mb-8" @click="mobileMenu = false">Avantages</a>
              <a href="#buy" @click="mobileMenu = false">Commander</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="top" class="py-32 container mx-auto px-4 text-center">
      <div>
        <img src="/public/big-picture.png" alt="Bol Touilleur" class="mx-auto">
      </div>
      <div class="mt-16">
        <h3 class="text-primary font-bold text-4xl">
          #ilovebowl
        </h3>
        <h1 class="font-bold text-5xl">
          Bol Touilleur pour vos soupes
        </h1>
      </div>
    </div>
    <div id="presentation" class="bg-primary-light">
      <div class="py-16 container mx-auto px-4">
        <div class="w-1/3 mb-6">
          <h2 class="text-3xl">
            Un bol qui vous fait gagner du temps
          </h2>
        </div>
        <p class="text-justify">
          Parce que touiller votre soupe avec vos doigts, ça brule, nous avons imaginé un bol qui touille votre soupe tout seul. Nous aurions pu vous proposer un gant, mais avouez que c'est moins fun. Voici donc notre BolTouilleur™
        </p>
      </div>
    </div>
    <div>
      <div class="py-28 container mx-auto px-4 text-center">
        <img src="/public/stars.png" alt="5 étoiles" class="mx-auto">
        <p class="font-bold text-4xl">
          100% de nos clients satisfait*
        </p>
      </div>
    </div>
    <div id="buy" class="bg-gray-100">
      <div class="py-20 container mx-auto px-4 text-center">
        <h3 class="font-bold text-2xl">
          Je le veux !
        </h3>
        <p class="text-gray-600 mt-4">
          Pour être alerté de l’arrivé de notre BolTouilleur, entrez votre adresse email.
        </p>
        <div class="mt-8 flex items-center mx-auto w-2/3">
          <input type="email" class="border bg-white rounded-none w-full py-3 px-6" placeholder="Email">
          <button class="bg-primary color-white font-bold px-6 py-3" @click="fakePopup = true">
            OK
          </button>
        </div>
      </div>
    </div>
    <div class="py-2">
      <div class="container mx-auto px-4 text-center text-gray-400">
        <p class="text-xs">
          *Parmis un nombre incroyable de client (un seul)
        </p>
      </div>
    </div>
    <div class="py-16">
      <div class="container mx-auto px-4 text-center">
        <img src="/public/logo.png" alt="Bol Touilleur" class="mx-auto h-8">
      </div>
    </div>
    <div v-show="fakePopup" class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div class="w-2/3 max-w-2xl bg-white rounded px-8 py-16 text-center shadow">
        <h2 class="font-bold text-xl">
          MERCI !
        </h2>
        <p class="mt-6 text-gray-600">
          Vous serez averti lors de la sortie du <strong>BolTouilleur</strong>.
        </p>
        <button class="mt-6 px-8 py-4 bg-primary text-white font-bold rounded" @click="fakePopup = false">
          FERMER
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
      fakePopup: false
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
