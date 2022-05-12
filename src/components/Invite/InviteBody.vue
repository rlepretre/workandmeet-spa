<template>
<main>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-blue-custom">AJOUTER DES PERSONNES</h1>
        <p class="fs-4 py-4">Ajouter ci-dessous les adresses e-mail des contacts que vous souhaitez inviter.</p>
        <form action="">
          <div class="d-flex mb-5">
            <div class="input-group">
              <input type="email" name="" id="" class="form-control p-3" placeholder="email@hotmail.com">
            </div>
            <button type="button" class="btn btn-secondary-custom text-primary-custom ms-3 py-3 px-5">Ajouter</button>
          </div>
          <div class="input-group mb-3">
            <textarea name="" id="" class="form-control p-3" cols="30" rows="10">
              Je fais partie de la communauté Work And Meet et j'aimerais t'inviter 
              à la rejoindre car je pense que ça t'intéresser. Cette plateforme
              gratuite te permet de trouver un espace de travail partout pour
              t'installer dans l'urgence entre deux rendez-vous ou simplement pour
              travailler ailleurs que chez toi. Et si on s'organisait une session 
              de travail ensemble dans un de leurs espaces?

              Bonne journée.
            </textarea>
          </div>
          <div class="d-flex justify-between">
            <button type="button" class="btn btn-secondary-custom text-primary-custom py-3 px-5">Inviter</button>
            <button type="button" class="btn btn-secondary-custom text-primary-custom py-3 px-5">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import { ref } from 'vue'
import Header from './Header.vue';
export default {
  name: 'InviteUser',

  components: {
      Header
  },

  setup() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>