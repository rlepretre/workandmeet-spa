<template>
<GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 1000px;"
  >
    <GMapCluster>
      <GMapMarker
        :key="n.id"
        v-for="n in espaceData"  
        :position="{lat: n.lat, lng:n.lng}"
        :clickable="true"
        :draggable="true"
        @click="onMarker(n.id)"
        @mouseover="onMouse(n.id)"
        
      >
        <GMapInfoWindow
          
          :opened="espaceId === n.id"
      >
        <div class="over">
          <div>
              {{n.name }}
          </div>
          <div> 
            {{ n.price / 100 }}€/heure
          </div>
          <div>
            <div class="icons">
              <q-icon  v-if="n.wifi == 1" name="wifi" />
              <q-icon  v-if="n.coffee == 1" name="coffee" />
              <q-icon  v-if="n.wc == 1" name="wc" />
              <q-icon  v-if="n.power == 1" name="power"/>
              <q-icon class="q-ml" v-if="n.parking == 1" name="parking"/>
            </div>
          </div>
        </div>
      </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
        espaceData: {},
    },
  name: 'App',
  data() {
    const espaceId = null
    console.log(this.espaceData)
    return {
      espaceId,
        center: {lat: 50.387363, lng: 4.6858699999999995},
      }
    
  },
  methods: {
    onMouse(id){
      console.log("onmouse")
      this.espaceId = id
    },
    onMarker(id){
      this.espaceId = id
      this.$router.push(`/post/${id}`)

    }
  }
  
}
</script>
<style scoped>
.icons {
  display: flex;
  flex-direction: row;
}
.over {
  width: 50px;
}
.q-ml {
  margin-left: 20px;
}
</style>
