<template>
    <q-header elevated class="header bg-white py-2" height-hint="200">
        <q-toolbar>
            <router-link :to="{name: 'Home'}">
                <q-avatar square class="image">
                    <img src="../assets/images/logo.png" alt="logo" />            
                </q-avatar>
            </router-link>
            <q-toolbar-title class="text-blue-custom">
                Work And Meet
            </q-toolbar-title>
            <Menu/>
        </q-toolbar>
    </q-header>
</template>

<script>
import { fabApple } from '@quasar/extras/fontawesome-v5'
import { ref } from 'vue'
import Menu from '../Menu.vue';   
export default {
    name: "Header",
    setup() {
        const url = ref("./logo.png");
        return {
            model: ref(null),
            url,
            fabApple
        };
    },
    components: { 
        Menu 
    }
}
</script>
<style scoped>
.image {
    width: 100px;
    /* grid-column: span 2; */
    grid-row: span 5;
    line-height: 40px;
    display: flex;
}
.header {
    color: #444 !important;
}
</style>