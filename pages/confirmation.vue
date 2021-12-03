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
          Merci pour votre commande !
        </h1>

        <div class="pt-16 pb-24">
          <p>Votre commande numéro <strong class="font-bold">5a6453 </strong> à bien été enregistrée en mémoire.</p>
          <p>Vous recevrez un fax lors de l'expédition de votre commande par notre transporteur CamionRouleur.</p>
          <br>
          <p>Le paiement de votre commande se fera à la livraison. Voici les modes de paiement acceptés :</p>
          <ul class="px-4 mt-2">
            <li>- Espèce</li>
            <li>- Carte bancaire</li>
            <li>- Chèque</li>
            <li>- Capsule</li>
          </ul>
          <br>
          <p>
            Si vous souhaitez annuler votre commande, vous pouvez nous contacter par lettre recommandée avec accusé de reception.
            N'oubliez pas d'y inclure un chèque de 10€, une pièce d'identité, un RIB ainsi qu'un justificatif de domicile pour que
            votre demande puisse être traitée.
          </p>
          <br><br>
          <strong class="font-bold">Toute l'équipe de BolTouilleur vous remercie pour votre commande !</strong>
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
