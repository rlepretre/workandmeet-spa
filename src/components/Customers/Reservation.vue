<template>
<q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="py-3"></div> <!-- ./spacer -->
    <q-page-container>
    <div class="q-pa-md q-gutter-md">
        <q-toolbar class="text-black shadow-1">
            <q-toolbar-title>Mes Réservations</q-toolbar-title>
        </q-toolbar>
        <div class="box">
            <div>
                <q-btn flat round icon="favorite" :class="{ active: activeClasses }" @click="addFav"/>
            </div>
            <div >
                <q-btn rounded style="
                background: rgba(24, 22, 121, 1);
                color: white;
              " >Bureau</q-btn>
              <q-btn rounded style="
                background: rgba(24, 22, 121, 1);
                color: white;
              " >Coworking</q-btn>
            </div>
        </div>
    <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
            <q-img 
                style="width: 300px"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
        <q-card-section class="q-pt-xs" style="width: 400px">
            <div class="text-h4 q-mt-sm q-mb-xs">CHEZ XAVIER</div>
            <div class="q-pa-md flex q-gutter-md">
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de début</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de fin</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Jour de réservation</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Montant total</div>
                </div>
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">9h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">16h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">20-05-2022</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">60€</div>
                </div>
            </div>
            
            <q-card-actions  align="right">
                <q-btn rounded style="
                background: rgba(24, 22, 121, 1);
                color: white;
                width: 200px
              " >Réserver à nouveau</q-btn>
            </q-card-actions>
        </q-card-section>

      </q-card-section>
    </q-card>
    <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
            <q-img 
                style="width: 300px"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
        <q-card-section class="q-pt-xs" style="width: 400px">
            <div class="text-h4 q-mt-sm q-mb-xs">CHEZ XAVIER</div>
            <div class="q-pa-md flex q-gutter-md">
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de début</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de fin</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Jour de réservation</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Montant total</div>
                </div>
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">9h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">16h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">20-05-2022</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">60€</div>
                </div>
            </div>
            <q-card-actions  align="right">
                <q-btn rounded style="
                background: rgba(24, 22, 121, 1);
                color: white;
                width: 200px

              " >Réserver à nouveau</q-btn>
            </q-card-actions>
        </q-card-section>

      </q-card-section>
    </q-card>
    <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
            <q-img 
                style="width: 300px"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
        <q-card-section class="q-pt-xs" style="width: 400px">
            <div class="text-h4 q-mt-sm q-mb-xs">CHEZ XAVIER</div>
            <div class="q-pa-md flex q-gutter-md">
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de début</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de fin</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Jour de réservation</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Montant total</div>
                </div>
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">9h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">16h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">20-05-2022</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">60€</div>
                </div>
            </div>
            <q-card-actions  align="right">
                <q-btn rounded style="
                background: rgba(24, 22, 121, 1);
                color: white;
                width: 200px
              " >Réserver à nouveau</q-btn>
            </q-card-actions>
        </q-card-section>

      </q-card-section>
    </q-card>
    <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
            <q-img 
                style="width: 300px"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
        <q-card-section class="q-pt-xs" style="width: 400px">
            <div class="text-h4 q-mt-sm q-mb-xs">CHEZ XAVIER</div>
            <div class="q-pa-md flex q-gutter-md">
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de début</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Heure de fin</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Jour de réservation</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">Montant total</div>
                </div>
                <div>
                    <div class="text-h6 q-mt-sm q-mb-xs">9h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">16h</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">20-05-2022</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">60€</div>
                </div>
            </div>
            <q-card-actions  align="right">
                <q-btn rounded style="
                background: rgba(24, 22, 121, 1);
                color: white;
                width: 200px
              " >Réserver à nouveau</q-btn>
            </q-card-actions>
        </q-card-section>

      </q-card-section>
    </q-card>
    </div>
     </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from "vue"
import Header from "../Post/Header.vue";
import axios from "axios";
export default {
    data: function () {
    return{
      activeClasses: false,

    }
  },
  methods: {
    addFav() {
      this.activeClasses = !this.activeClasses;
    }
  },
  components:{
      Header,
  }
}
</script>
<style  scoped>
.my-card{
  width: 100%;
  max-width: 700px
}
.active {
  color: red !important;
}
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

</style>