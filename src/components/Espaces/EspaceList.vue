<template>
        <div class="espaces">
            <div class="espace"><Espace/></div>
            <div class="map"><Map/></div>
        </div>
        
</template>

<style>
.espaces {
   
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
.espace {
    grid-column: span 4;

}
.map {
    grid-column: span 3;

}
</style>
<script>
import Espace from "./Espace.vue";
import Map from "./Map.vue";

export default {
    name: 'EspaceList',
    components: {
        Espace,
        Map
    },
  

}
</script>