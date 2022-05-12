<template>
<div class="card">
    <img src="../../assets/images/Espace-210x280.jpg" class="card-img-top" alt="Photo Espace">
    <div class="card-body">
      <h5 class="card-title text-center">Chez Xavier</h5>
      <p class="card-text">Mont saint-gilbert, Brabant Wallon</p>
      <p class="d-flex justify-content-between">Type d'espace: <span class="text-orange-custom">Bureau</span></p>
      <div class="d-flex justify-content-between">
        <router-link :to="{name: 'EspaceStepTwo'}">
          <q-btn style="background: rgba(24, 22, 121, 1); color: white" rounded label="Modifier" />
        </router-link>
        <q-btn style="background: rgba(24, 22, 121, 1); color: white" rounded label="Supprimer" />
      </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'EspaceHoteItem',

  components: {
  },

  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 1rem;
  overflow: hidden;
}
</style>