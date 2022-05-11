<template>
  <div class="espaceList" v-bind="espaceData">
    <div class="espace">
      <div v-for="n in espaceData" :key="n.id">
        <Espace :n="n" />
      </div>
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
        flat
        color="grey-4"
        active-color="primary"
      />
    </div>
    <div class="Map" >
      <Map class="map" v-bind="espaceData" :espaceData="espaces" />
    </div>
  </div>
</template>

<style>
.espaceList {
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  /* grid-template-columns: repeat(7, 1fr); */
}
.espace {
  grid-column: span 4;
  margin-top: 10px;
  overflow-y: auto;
  height: 100vh;
}
.map {
  grid-column: span 3;
  width: 600px;
  height: 800px;
 
}


</style>
<script>
import Espace from "./Espace.vue";
import Map from "./Map.vue";
import { ref } from "vue";
import { mapGetters } from "vuex";

export default {
  props: {
    n: {},
  },
  data() {

    return {
      espaceData: {},
      filterList: ["wifi", "coffee"]
    };
  },
  name: "EspaceList",
  components: {
    Espace,
    Map,
  },
  setup() {
    const itemClick = "";
    return {
      itemClick,
      slide: ref(1),
      current: ref(1),
    };
  },
  computed: {
    ...mapGetters(["filtereverything", "filterPlaceType"]),
    espaces() {
      this.espaceData = this.filtereverything(this.$store.state.item);
    },
  },
  mounted() {
    this.$store.dispatch("GET_EVERYTHING");
  },
};
</script>