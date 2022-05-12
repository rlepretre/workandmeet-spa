<template>
<q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="py-3"></div> <!-- ./spacer -->
    <q-page-container>
    <EspaceHoteList/>
    </q-page-container>
</q-layout>
</template>

<script>
import { ref } from 'vue'
import Header from './Header.vue';
import EspaceHoteList from './EspaceHoteList.vue';
export default {
  name: 'EspaceHote',

  components: {
      Header,
      EspaceHoteList
  },

  setup() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>