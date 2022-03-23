<template>
<GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 1000px"
  >
    <GMapCluster>
      <GMapMarker
        :key="n.id"
        v-for="n in espaces"  
        :position="{lat: n.lat, lng:n.lng}"
        :clickable="true"
        :draggable="true"
        @click="center = {lat: n.lat, lng:n.lng}"
          
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
        espaces: [],
        
    },
  name: 'App',
  data() {
    console.log(this.n)
    return {
        center: {lat: 50.387363, lng: 4.6858699999999995},
      }
    
  },
  
}
</script>
