<template>
<q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container>
        <q-page>
            <q-tabs
                no-caps
                v-model="tab"                
                inline-label
                class="bg-blue-custom text-white shadow-2"
            >
                <q-tab name="infos-1"  label="Informations de l'espace" />
                <q-tab name="infos-2" label="Informations de l'espace" />
                <q-tab name="paiement" label="Informations de paiement" />
                <q-tab name="validation" label="Validation" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="infos-1">
                    <div class="row">
                        <div class="col-6 q-pt-xl">
                            <h3 class="text-orange-custom q-mb-lg">Information de l'espace</h3>
                            <div class="q-mb-xl">
                                <q-input class="q-mb-md" square outlined v-model="text" label="Nom de l'espace"/>
                                <div class="row">
                                    <div class="col">
                                        <q-input class="q-mb-md" square outlined v-model="text" label="Ajouter des photos"/>
                                        <q-select square outlined v-model="model" :options="options" label="Espace"/>
                                    </div>
                                    <div class="col text-left">
                                        <q-btn outline size="xl" color="primary" icon="upload" />
                                        <p class="text-caption q-mt-md">Les photos doivent être au format png jpeg </p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="text-orange-custom q-mb-lg">Adresse de l'espace</h3>
                            <div class="">
                                <q-input class="q-mb-md" square outlined v-model="text" label="Adresse"/>        
                                <q-input class="q-mb-md" square outlined v-model="text" label="Ville"/>
                                <q-input class="q-mb-md" square outlined v-model="text" label="Code postal"/>
                                <q-input class="q-mb-md" square outlined v-model="text" label="Pays"/>
                            </div>
                        </div>

                        <div class="col-6 q-pt-xl">
                            <h3 class="text-orange-custom q-mb-lg">Information sur l'hôte</h3>
                            <div class="">
                                <q-input class="q-mb-md" square outlined v-model="text" label="Nom et prénom de l'hôte"/>        
                                <q-input class="q-mb-md" square outlined v-model="text" label="Adresse email de l'espace"/>
                                <q-input class="q-mb-md" square outlined v-model="text" label="Numéro de téléphone"/>
                                <q-select square outlined v-model="model" :options="options" label="Votre status" />
                            </div>
                        </div>
                    </div>

                </q-tab-panel>

                <q-tab-panel name="infos-2">

                </q-tab-panel>

                <q-tab-panel name="paiement">

                </q-tab-panel>

                <q-tab-panel name="validation">

                </q-tab-panel>
            </q-tab-panels>

            <div class="row q-mt-lg q-px-md">
                <router-link :to="{name: 'EspaceHote'}">
                    <q-btn class="btn-primary-custom" rounded label="Annuler" padding="1rem 2rem"/>
                </router-link>
                <q-space></q-space>                
                <q-btn class="btn-primary-custom" rounded label="Suivant" padding="1rem 2rem"/>
                
            </div>
        </q-page>
    </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Header from './Header.vue';
export default defineComponent({
    name: "EspaceStepOne",
    setup() {
        return {
            tab: ref('infos-1')
        }
    },
    components: { 
        Header 
    }
})
</script>
<style scoped>
.q-tab {
    min-height: 7rem;
}
.my-custom-toggle {
    border: 1px solid #aaa
}

</style>