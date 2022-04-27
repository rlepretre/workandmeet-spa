<template>
    <div >
        <div class="title" >
            <h2>Information personnelle</h2>
        </div>
        <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
                <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
                >
                    <div class=" row items-start">
                        <q-input
                            style="width:200px"
                            outlined
                            rounded
                            v-model="name"
                            label="Nom *"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />

                        <q-input
                            outlined
                            rounded
                            style="width:200px"
                            v-model="firstname"
                            label="Prénom *"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"

                        />
                    </div>   
                    <q-input rounded outlined v-model="email" :type="email" label="Email *"
 >
                        <template v-slot:append>
                        <q-icon name="mail" />
                        </template>
                    </q-input>
                    <q-input rounded outlined  v-model="password" :type="isPwd ? 'password' : 'text'" label="Mot de Passe *">
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>
                    <q-input rounded outlined bottom-slots v-model="password" :type="isPwd ? 'password' : 'text'" label="Confirme Mot de Passe *">
                        <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                        </template>
                    </q-input>
                    <div>
                        <q-file color="teal" rounded outlined v-model="model" label="Ajouter une photo de profil">
                            <template v-slot:prepend>
                            <q-icon name="cloud_upload" />
                            </template>
                        </q-file>
                        <q-toggle
                            :false-value="0"
                            :label="`S'inscrire à la newsletter`"
                            :true-value="1"
                            color="green"
                            v-model="newsletter"
                        />
                    </div>
                    
                    <div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </div>
        </div>
  </div>
</template>
<script >
import { ref } from "vue"
export default{
    setup(){
        return {
            newsletter: ref(1),
            customModel: ref('no'),
        }
    }
}
</script>
<style scoped>
.title{
    border: 1px solid;
}
</style>