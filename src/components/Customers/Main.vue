<template>
   <q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="py-3"></div> <!-- ./spacer -->
    <q-page-container>
        <router-view/>
    </q-page-container>
  </q-layout>
    
</template>
<script>
import Header from "../Post/Header.vue"
import Reservation from "./Reservation.vue"
import Information from "../User/Information.vue"
export default {
    setup() {
        
    },
    components: {
     Header,
     Reservation,
     Information
    
    }
}
</script>
