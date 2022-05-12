<template>
<q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="q-py-lg"></div> <!-- ./spacer -->
    <q-page-container>
        <q-page class="q-pa-lg">
            <h1 class="text-blue-custom q-mb-lg">INFORMATIONS SUR L'ESPACE</h1>
            <q-list class="q-mb-lg">
                <q-item>
                    <q-item-section>
                        <q-btn-toggle
                            v-model="model"
                            class="my-custom-toggle"
                            spread
                            rounded
                            size="lg"
                            no-caps
                            unelevated
                            color="white"
                            text-color="black"
                            toggle-color="orange"
                            toggle-text-color="white"
                            :options="[
                                {label: 'Bureau', value: 'bureau'},
                            ]"
                        />
                    </q-item-section>
                </q-item>

                <q-item>
                    <q-item-section>
                        <q-btn-toggle
                            v-model="model"
                            class="my-custom-toggle"
                            spread
                            rounded
                            size="lg"
                            no-caps
                            unelevated
                            color="white"
                            text-color="black"
                            toggle-color="orange"
                            toggle-text-color="white"
                            :options="[
                                {label: 'Salle de réunion', value: 'sdr'},
                            ]"
                        />
                    </q-item-section>
                </q-item>

                <q-item>
                    <q-item-section>
                        <q-btn-toggle
                            v-model="model"
                            class="my-custom-toggle"
                            spread
                            rounded
                            size="lg"
                            no-caps
                            unelevated
                            color="white"
                            text-color="black"
                            toggle-color="orange"
                            toggle-text-color="white"
                            :options="[
                                {label: 'Salle de conférence', value: 'sdc'},
                            ]"
                        />
                    </q-item-section>
                </q-item>
            </q-list>
            
            <div class="row q-px-md">
                <router-link :to="{name: 'EspaceHote'}">
                    <q-btn class="btn-primary-custom" rounded label="Précédent" padding="1rem 2rem"/>
                </router-link>
                <q-space></q-space>
                <!-- <router-link :to="{name: 'EspaceStepTwo'}">
                    <q-btn class="btn-primary-custom" rounded label="Suivant" padding="1rem 2rem"/>
                </router-link> -->
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
            model: ref('bureau')
        }
    },
    components: { 
        Header 
    }
})
</script>
<style scoped>
.my-custom-toggle {
    border: 1px solid #aaa
}

</style>