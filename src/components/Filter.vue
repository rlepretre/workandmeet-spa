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
                            :inner-max="10"
                            markers
                            :marker-labels="arrayMarkerLabel"
                            label-always
                            :label-value="priceLabel"
                            switch-label-side
                            switch-marker-labels-side
                            :min="1"
                            :max="10"
                        />
                        
                        <q-btn rounded style="background: rgb(24, 22, 121); color: white;">Valider</q-btn>
                    </q-banner>
                </q-popup-proxy>
            </q-btn>
            <q-btn-dropdown
                v-model="menu"
                class="q-ml-lg"
                outline rounded color="white" text-color="black" label="Espace"
                >
                <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Coworking</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-separator spaced inset />
                    <q-item clickable v-close-popup @click="onItemClick">
                        
                        <q-item-section>
                            <q-item-label>Salle de reunion</q-item-label>
                        </q-item-section>
                     
                    </q-item>
                    <q-separator spaced inset />
                    <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Salle de conference</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                </q-btn-dropdown>
        </div>
        <div  class="container-middle">
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black" label="Fax" />
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black" label="Wifi" />
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black" label="Cafétériat" />
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black" label="Café" />
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black" label="Imprimante" />

        </div>
        <div class="container-right">
            <q-btn outline rounded color="white" text-color="black" label="Filtre" />
        </div>
    </div>
    </div>
    
</template>
<style scoped>
.container {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
}
.container-left {
    padding-right: 10px;
    border-right: 1px solid rgba(10,10,10,.1) ;
}


.container-middle {
     padding-left: 10px;
}
.container-right {
    padding-left: 650px;
}
</style>
<script>
import { ref,computed } from 'vue'

export default {
  setup () {
    const priceModel = ref(4)

    return {
      menu: ref(false),
      onItemClick () {
        // console.log('Clicked on an Item')
      },
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

      ]
    }
  }
}
</script>