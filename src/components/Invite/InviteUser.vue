<template>
<q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="py-3"></div> <!-- ./spacer -->
    <q-page-container>
    <InviteBody/>
    </q-page-container>
</q-layout>
</template>

<script>
import { ref } from 'vue'
import Header from './Header.vue';
import InviteBody from './InviteBody.vue';
export default {
  name: 'InviteUser',

  components: {
      Header,
      InviteBody
  },

  setup() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>