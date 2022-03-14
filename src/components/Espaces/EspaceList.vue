<template>
        <div class="espaces">
            <div v-for="n in espaces"
                :key="n.id" class="espace"
                
            >
                <Espace  :n=n />
            </div>
            <div class="map"><Map/></div>
                <q-pagination
                    v-model="current"
                    :max="5"
                    direction-links
                    flat
                    color="grey-4"
                    active-color="primary"
                />
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
import { ref } from 'vue'
import { mapGetters } from 'vuex';

export default {
    
    name: 'EspaceList',
    components: {
        Espace,
        Map
    },
    setup () {
       const itemClick= ''
        return {
            itemClick,
            slide: ref(1),
            current: ref(3),
        }
    },
    computed: {
        ...mapGetters([
            "filtereverything"
        ]),
        espaces() {
            return this.filtereverything(this.$store.state.item)
        }
    },
    mounted() {
        this.$store.dispatch("GET_EVERYTHING")
    }
}
</script>