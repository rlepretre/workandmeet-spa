<template>
  <div>
    <q-bar class="bg-white" style="height: 160px">
        <div class="container">
            <div class="header">
                <div class="image">
                    <!-- <q-img src="src/assets/logo.png"  /> -->
                    <!-- <q-img src="src/assets/etoile.png"  /> -->
                    <q-img src="src/assets/reservation1.jpeg"  />
                    <q-img src="src/assets/reservation2.jpeg"  />
                    <q-img src="src/assets/réservation3.jpeg"  />
                </div>
                <!-- <div class="text" >
                    <h6>4,5.89 Commentaires Bruxelles, Belgique</h6>
                </div> -->
        
            </div>
    
       </div>
    </q-bar> 
  </div>
</template>

<script>
import { fabApple } from '@quasar/extras/fontawesome-v5'
import { ref } from 'vue'
   
export default {
    name: 'Header',
    setup() {
        const url = ref("src/assets/logo.png");
        return {
            time: ref("10:56"),
            date: ref("2019/02/01"),
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
    width: 200px;
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