<template>
    <div>
        <div class="container">
        <div class="container-left">
            <q-btn rounded color="white" text-color="black" label="Tarif" 
            >
                <q-popup-proxy >

                    <q-banner style="width:600px">
                        Choisissez un montant

                        <q-slider
                            class="q-mt-xl"
                            v-model="priceModel"
                            color="rgb(24, 22, 121)"
                            :inner-min="0"
                            :inner-max="12"
                            markers
                            :marker-labels="arrayMarkerLabel"
                            label-always
                            :label-value="priceLabel"
                            switch-label-side
                            switch-marker-labels-side
                            :min="1"
                            :max="12"
                        />
                        
                        <q-btn rounded style="background: rgb(24, 22, 121); color: white;" v-close-popup :priceModel="priceModel" @click="savePrice(itemClick= priceModel)">Valider</q-btn>
                    </q-banner>
                </q-popup-proxy>
            </q-btn>
            <q-btn-dropdown
                v-model="menu"
                class="q-ml-lg"
                outline rounded color="white" text-color="black" label="Espace"
                >
                <q-list v-for="espace in espacesType" :key="espace">
                    <q-item clickable v-close-popup @click="onItemClick(itemClick= espace)">
                        <q-item-section>
                            <q-item-label>{{espace}}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-separator spaced inset />
                    
                </q-list>
                </q-btn-dropdown>
        </div>
        <div  class="container-middle" >
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black"  v-model="val" v-for="item in $store.state.items" :key="item.value" :item="item"  :label="item.label" @click="filter(itemClick=item, item.count++ , item.checked= true)"/>
        </div>
        <div class="container-right">
            <q-btn outline rounded color="white" text-color="black" icon="tune" label="Filtre" />
        </div>
    </div>
    </div>
    
</template>
<style scoped>
.container {
    width: 100%;
    height: 40px;
     display: grid;
    grid-template-columns: repeat(7, 1fr);
}
.container-left {
    grid-column: span 1;
    padding-right: 10px;
    border-right: 1px solid rgba(10,10,10,.1) ;
    display: flex;
    flex-direction: row;
}


.container-middle {
    grid-column: span 5;

    padding-left: 10px;
    display: flex;
    flex-direction: row;
}
.container-right {
    grid-column: span 1;
    display: flex;
    flex-direction: row;
}
</style>
<script>
import { ref,computed } from 'vue'

export default {
    
  setup () {
    const priceModel = ref(4)
    const itemClick= ''
    return {
        count: 0,
    val: ref(false),
      menu: ref(false),
        itemClick,
        priceModel,
        priceLabel: computed(() => `$ ${priceModel.value}`),
        arrayMarkerLabel: [
            
            { value: 1, label: '$1' },
            { value: 2, label: '$2' },
            { value: 3, label: '$3' },
            { value: 4, label: '$4' },
            { value: 5, label: '$5' },
            { value: 6, label: '$6' },
            { value: 7, label: '$7' },
            { value: 8, label: '$8' },
            { value: 9, label: '$9' },
            { value: 10, label: '$10' }

      ],
      
      espacesType: [
          "Coworking",
          "Autre",
          "Bureau privé",
          "Salle de réunion",
          "Salle de séminaire",

      ]

    }
   
  } ,
  methods: {
    filter() {
        if(this.itemClick.count == 1) {
            this.$store.state.item = this.itemClick
        }
        else if(this.itemClick.count == 2) {
            this.itemClick.count = 0
        }
    },
    onItemClick () {
        console.log(this.itemClick)
        this.$store.state.item = this.itemClick
      },
    savePrice() {
        console.log(this.itemClick)
        this.$store.state.item = this.itemClick 
    }
  }
 
}
</script>