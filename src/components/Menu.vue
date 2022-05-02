<template>
<div class="button-content">
                    
    <div class="button-hote">
        <q-btn rounded style="
            background: rgba(24, 22, 121, 1);
            color: white;
            "
            label="Devenez hôte"
        />
    </div>
    <div>
        <q-btn class="menu-connexion">
            <q-icon name="menu"  />
            <q-icon name="account_circle" />
            <q-menu v-if="$store.state.user == null">
                <q-list dense style="min-width: 100px">
                    <q-item clickable v-close-popup>
                        <q-item-section @click="openLogin">Connexion</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section @click="openSignup">Inscription</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
            <q-menu v-if="$store.state.user != null">
                <q-list dense style="min-width: 100px">
                    <q-item clickable v-close-popup>
                        <q-item-section>Mon Compte</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section>Mes réservations</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                        <q-item-section @click="logout">Deconnexion</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>
    </div>
    <Login :interception="interception" @clicked="onClickChild" />
    <Signup :inscription="inscription" @clickedInsc="onClickSignup" />
</div>
</template>
<style scoped>
.menu-connexion {
    
    border-radius: 60px;
    border: 1px solid;
    align-items: center;
    display: flex;
    flex-direction: row;
}

.button-content {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
<script>
import {ref} from "vue";
import Login from "./Auth/Login.vue";
import Signup from "./Auth/Signup.vue";
export default {
    setup() {
        const interception = ref(false);
        const inscription = ref(false)
        return{
            interception,
            inscription,
        }
    },
    components: {
        Login,
        Signup,
    },
    methods:{
        openLogin() {
            console.log(this.interception)
            this.interception = true
            console.log(this.interception)
        },
        onClickChild(value) {
            this.interception = value
            console.log(value) // someValue
        },
        openSignup() {
            this.inscription = true
        },
        onClickSignup(value) {
            this.inscription = value
            console.log(value) // someValue
        },
        logout(){
            localStorage.removeItem('user');
            this.$router.go()
        }
    }
}
</script>
