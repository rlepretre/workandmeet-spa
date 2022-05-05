<template>
  <div class="q-pa-md q-gutter-sm">

    <q-dialog 
      full-height v-model="interception" persistent>
      <q-card style="width: 700px; max-width: 80vw;">

        <q-card-section >
          <q-btn flat v-close-popup @click="closePop" round dense icon="close" />
          <div class="text-h4" align="middle">Connexion</div>
        </q-card-section>
        <q-separator spaced inset />
          <q-form   
            @submit.prevent="onSubmit"
            class="q-gutter-md"
            style="margin-top: 40px"
          >
            <q-card-section>
              <div class="text-h5" align="left">Bienvenue sur Work and Meet</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              
              <q-input rounded outlined bottom-slots v-model="email" type="email" hint="Email" >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-input rounded outlined bottom-slots v-model="password" :type="isPwd ? 'password' : 'text'" hint="Mot de Passe">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

            </q-card-section >
            <q-card-section class="q-pa-md q-gutter-sm">
            <q-card-actions  class="q-pa-md q-gutter-sm">
                <q-btn rounded style="background: rgba(24, 22, 121, 1); color: white;" label="Connexion" class="full-width" type="submit" />
            </q-card-actions>
            </q-card-section>
         </q-form>
        <q-separator spaced inset >ou</q-separator>

         <q-card-section class="q-pa-md column q-gutter-sm">
          <q-card-actions class="q-pa-md column q-gutter-sm">
            <q-btn class="full-width" rounded color="white" text-color="black" >
              <i class="fab fa-google fa-2x"></i> 
              Connectez-vous avec Google
            </q-btn>
            <q-btn class="full-width" rounded color="white" text-color="black" type="submit">
              <i class="fab fa-facebook-square fa-2x"></i>
              Connectez-vous avec Facebook
            </q-btn>
            <q-btn class="full-width" rounded color="white" text-color="black" type="submit">
              <i class="fab fa-linkedin-in fa-2x"></i> 
              Connectez-vous avec Linkedin
            </q-btn>

          </q-card-actions>
         </q-card-section>
      </q-card>
    </q-dialog> 
  </div>
</template>
<script>
import { ref } from "vue"
import { useQuasar } from 'quasar'
import axios from "axios"

export default
{
    props: {
       interception: ref(false)
        
    },
    setup() {
        const $q = useQuasar()
        
        const email= ref('')
        const password= ref('')
        return {
          confirm: ref(false),
          prompt: ref(false),
          email,
          password,
          isPwd: ref(true),
    
          onReset () {
            email.value = null
            password.value = null
          }
        }
    },
    data() {
      return{
        
      }
    },
    methods:{
      closePop(event){
        let interception = false
        this.$emit('clicked', interception)        
      },
      onSubmit() {
        axios.post('/api/auth/login',{email: this.email, password:this.password}).then(response => {
          if(response.data.token){
            console.log(response.data)
            localStorage.setItem('user',JSON.stringify(response.data))
          }
          this.$router.go()
          return response.data;
        })
        console.log(this.$store.state.user)
        
      },
    }
}
</script>
<style>
.fa-google {
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.fa-facebook-square {
  color: #3b5998;
  background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
  background-size: 55%;
  background-position: 70% 0;
  background-repeat: no-repeat;
}
.fa-linkedin-in {
  color: #3b5998;
  background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
  background-size: 55%;
  background-position: 70% 0;
  background-repeat: no-repeat;
}
</style>
