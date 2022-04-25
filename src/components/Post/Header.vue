<template>
    <q-header elevated class="bg-white" height-hint="200">
        <q-toolbar>
            
                <router-link
                    :to="{
                    name: 'Home'}">
                    <q-avatar square class="image">
                    <img src="../assets/images/logo.png" alt="logo" />            
                    </q-avatar>

                </router-link>
            <q-toolbar-title class="text-blue-custom">
                Work And Meet
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script>
import { fabApple } from '@quasar/extras/fontawesome-v5'
import { ref } from 'vue'
   
export default {
    name: 'Header',
    setup() {
        const url = ref("./logo.png");
        return {
            model: ref(null),
            options: [
                "Google",
                "Facebook",
                "Twitter",
                "Apple",
                "Oracle"
            ],
            url,
            fabApple
        };
    },
    // components: { Filter }
}
</script>
<style scoped>

/* .button-element{
     display: flex;
    flex-grow: 2;
    margin: 10px 0 0 6px;
    flex-direction: column;
    padding-right: 0.3rem ;
    border-right: 0 none;
}
.container {
margin: 0;
  display: flex;
  flex-direction: column;
} */
/* .header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
.bg-white {
    height: 120px;
    border-bottom: 1px solid rgba(10,10,10,.1);
} */
.image {
    width: 100px;
    /* grid-column: span 2; */
    grid-row: span 5;
    line-height: 40px;
    display: flex;
}
/* .product-search {
    width: 730px;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 60px;
    cursor: pointer;
    height: 49px;
    border: 0.5px solid;
} */
/* .main-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
.search-content {
      grid-column: span 3;
      height: 70%;
      width: 70%;
      margin-left: 130px;
  } */
/* .button-search{
    align-items: center;
    margin-left: 20px;
    margin-right: 5px;
    border-radius: 90px;
    margin-top: 0px;
}
.filter {
    margin-top: 30px;
    height: 40px;
    width: 100%;
}
.search-element {
  display: flex;
  flex-grow: 2;
  margin: 10px 0 0 6px;
  flex-direction: column;
}
.menu-connexion {
    height: 40px;
    width: 90px;
    border-radius: 60px;
    border: 1px solid;
    align-items: center;
    display: flex;
    flex-direction: row;
}
.button-content {
    grid-column: span 2;
    height: 70%;
    width: 70%;
    padding-left: 140px;
    display: flex;
    flex-direction: row;
    margin-top:10px;
} */
</style>