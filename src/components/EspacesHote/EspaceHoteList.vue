<template>
<div class="container">
    <div class="row mb-4">
        <div class="col-12">
            <h1 class="text-blue-custom">ESPACES</h1>
            <div class="text-right">
                <router-link :to="{name: 'EspaceStepOne'}">
                    <q-btn style="background: rgba(24, 22, 121, 1); color: white" rounded label="Ajouter un espace" />
                </router-link>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-3 mb-4" v-for="i in 8" :key="i">
            <EspaceHoteItem/>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import EspaceHoteItem from './EspaceHoteItem.vue'
export default {
  name: 'EspaceHoteList',

  components: {
      EspaceHoteItem
  },

  setup() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>