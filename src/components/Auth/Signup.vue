<template>
  <div class="q-pa-md q-gutter-sm">

    <q-dialog 
      full-height v-model="inscription" persistent>
      <q-card style="width: 700px; max-width: 80vw;">

        <q-card-section >
          <q-btn flat v-close-popup @click="closePop" round dense icon="close" />
          <div class="text-h5" align="middle">Inscription</div>
        </q-card-section>

        <q-separator spaced inset />
        <q-card-section>
            <div class="text-h5" align="left">Bienvenue sur Work and Meet</div>
        </q-card-section>

        <q-form   
            @submit="onSubmit"
            class="q-gutter-md"
            style="margin-top: 40px"
           
        >
       
          <q-card-section class="q-gutter-md row items-start">
            <q-input rounded outlined v-model="name" hint="Nom"> 
            </q-input>
              
            <q-input rounded outlined v-model="firstname" hint="Prénom">
            </q-input>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input rounded outlined v-model="email" type="email" hint="Email" >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="q-pt-none">
              <q-input rounded outlined v-model="password" :type="isPwd ? 'password' : 'text'" hint="Mot de Passe">
                  <template v-slot:append>
                  <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                  />
                  </template>
              </q-input>
          </q-card-section >
          <q-card-section class="q-pt-none">
              <q-input rounded outlined bottom-slots v-model="confirmPassword" :type="isPwd ? 'password' : 'text'" hint="Confirme Mot de Passe">
                  <template v-slot:append>
                  <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                  />
                  </template>
              </q-input>
          </q-card-section >
          <q-card-section>
            <q-checkbox
              v-model="customModel"
              color="secondary"
              label="Do you agree with the terms & conditions?"
              true-value="yes"
              false-value="no"
            />
            <q-toggle
              :false-value="0"
              :label="`S'inscrire à la newsletter`"
              :true-value="1"
              color="green"
              v-model="newsletter"
            />
          </q-card-section>
          <q-card-actions class="text-primary">
            <q-btn rounded style="background: rgba(24, 22, 121, 1); color: white;" label="Inscription" class="full-width" type="submit" />
          </q-card-actions>
        </q-form>
        <q-separator spaced inset >ou</q-separator>

         <q-card-section class="q-pa-md column q-gutter-sm">
          <q-card-actions class="q-pa-md column q-gutter-sm">
            <q-btn class="full-width" rounded color="white" text-color="black" icon="ion-logo-google" label="Inscrivez-vous avec Google"  />
            <q-btn class="full-width" rounded color="white" text-color="black" label="Inscrivez-vous avec Facebook" type="submit" icon="facebook" />
            <q-btn class="full-width" rounded color="white" text-color="black" label="Inscrivez-vous avec Linkedin" type="submit" icon="biLinkedin" />

          </q-card-actions>
         </q-card-section>
      </q-card>
    </q-dialog> 
  </div>
</template>
<script>
    //console.log(this.$store.state.interception)
import { ref } from "vue"
import { useQuasar } from 'quasar'
import axios from "axios"

export default
{
    
    props: {
       inscription: ref(false)
        
    },
    setup() {
       
      const $q = useQuasar()
      const name= ref('')
      const firstname= ref('')
      const email= ref('')
      const password= ref('')
      const newsletter = ref(1)
      const confirmPassword = ref('')
      return {
          confirm: ref(false),
          prompt: ref(false),
          email,
          password,
          name,
          firstname,
          confirmPassword,
          isPwd: ref(true),
          newsletter,
          customModel: ref('no'),
            //interception: ref(this.$store.state.interception)
           

          
      }
    },
    methods:{
      closePop(event){
        let inscription = false
        this.$emit('clickedInsc', inscription)        
      },
      onSubmit() {
      console.log({name:this.name, firstname: this.firstname, email: this.email, password: this.password, confirmPassword: this.confirmPassword,newsletter: this.newsletter})
      axios.post('/register',{name:this.name, firstname: this.firstname, email: this.email, password: this.password, password_confirmation: this.confirmPassword,newsletter: this.newsletter}).then(response => {
        console.log(response.data)
      })
    },
    },
   
}
</script>
