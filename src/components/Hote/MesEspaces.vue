<template>
    <q-layout view="lHh Lpr lFf">
        <Header/>
        <div class="py-3"></div> <!-- ./spacer -->
        <q-page-container>
            <div class="q-pa-md q-gutter-md">
                <q-toolbar class="text-black shadow-1">
                    <q-toolbar-title>Espaces</q-toolbar-title>
                </q-toolbar>
                <div class="box">
                    <div>
                    </div>
                    <div >
                        <q-btn rounded style="
                        background: rgba(24, 22, 121, 1);
                        color: white;
                        width: 200px
                    " >Ajouter un espace</q-btn>
                
                    </div>
                </div>
                <div class="q-pa-md row items-start q-gutter-md">
                    <q-card class="my-card" flat bordered>
                        <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />
                        <q-card-section>
                            <div class="text-h4 q-mt-sm q-mb-xs">Chez Xavier</div>
                            <div class="text-h6 q-mt-sm q-mb-xs">Mont saint-guibert, Brabant Wallon</div>
                            <div class="q-pa-md flex q-gutter-md">
                                <div>
                                    <div class="text-h6 q-mt-sm q-mb-xs">Type d'espace</div>
                                </div>
                                <div>
                                    <div class="text-h6 q-mt-sm q-mb-xs">Salle de reunion</div>
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-actions>
                             <q-btn rounded style="
                                background: rgba(24, 22, 121, 1);
                                color: white;
                                width: 100px
                            " >Modifier
                            </q-btn>
                             <q-btn rounded style="
                                background: rgba(24, 22, 121, 1);
                                color: white;
                                width: 100px
                            " >Supprimer
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="my-card" flat bordered>
                        <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />

                        <q-card-section>
                            <div class="text-h4 q-mt-sm q-mb-xs">Chez Xavier</div>
                            <div class="text-h6 q-mt-sm q-mb-xs">Mont saint-guibert, Brabant Wallon</div>
                            <div class="q-pa-md flex q-gutter-md">
                                <div>
                                    <div class="text-h6 q-mt-sm q-mb-xs">Type d'espace</div>
                                </div>
                                <div>
                                    <div class="text-h6 q-mt-sm q-mb-xs">Salle de reunion</div>
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-actions>
                             <q-btn rounded style="
                                background: rgba(24, 22, 121, 1);
                                color: white;
                                width: 100px
                            " >Modifier
                            </q-btn>
                             <q-btn rounded style="
                                background: rgba(24, 22, 121, 1);
                                color: white;
                                width: 100px
                            " >Supprimer
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                    <q-card class="my-card" flat bordered>
                        <q-img
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />

                        <q-card-section>
                            <div class="text-h4 q-mt-sm q-mb-xs">Chez Xavier</div>
                            <div class="text-h6 q-mt-sm q-mb-xs">Mont saint-guibert, Brabant Wallon</div>
                            <div class="q-pa-md flex q-gutter-md">
                                <div>
                                    <div class="text-h6 q-mt-sm q-mb-xs">Type d'espace</div>
                                </div>
                                <div>
                                    <div class="text-h6 q-mt-sm q-mb-xs">Salle de reunion</div>
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-actions>
                             <q-btn rounded style="
                                background: rgba(24, 22, 121, 1);
                                color: white;
                                width: 100px
                            " >Modifier
                            </q-btn>
                             <q-btn rounded style="
                                background: rgba(24, 22, 121, 1);
                                color: white;
                                width: 100px
                            " >Supprimer
                            </q-btn>
                        </q-card-actions>
                    </q-card>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>
<script>
import Header from "../Post/Header.vue"
export default {
    setup() {
        
    },
    components:{
        Header,
    }
}
</script>
<style scoped>

.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
