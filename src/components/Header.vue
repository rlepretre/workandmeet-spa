<template>
  <div>
    <q-bar class="bg-white" style="height: 160px">
        <div class="container">
        <div class="header">
            <div class="image">
                <q-img src="src/assets/logo.png"  />
            </div>
            <div class="q-pa-md search" >
                <q-form
                    class="q-gutter-md search-content"
                >
                    <div class="product-search">
                        <div class="search-element" >
                            <q-select borderless v-model="model" :options="options" label="Où" style="width: 140px; margin-bottom:20px; margin-left: 20px"/>
                        </div>
                        <q-separator spaced vertical />
                        <div class="search-element">
                            <q-input label="De quelle heure" borderless rounded v-model="time" mask="time" :rules="['time']" style="width: 140px;">
                                <template v-slot:append>
                                <q-icon name="access_time" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                    <q-time v-model="time">
                                        <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-time>
                                    </q-popup-proxy>
                                </q-icon>
                                </template>
                            </q-input>
                        </div>
                        <q-separator spaced vertical />

                        <div class="search-element">
                            <q-input label="A quelle heure" borderless  v-model="time" rounded mask="time" :rules="['time']" style="width: 140px;">
                                <template v-slot:append>
                                <q-icon name="access_time" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                    <q-time v-model="time">
                                        <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-time>
                                    </q-popup-proxy>
                                </q-icon>
                                </template>
                            </q-input>
                        </div>
                        <q-separator spaced vertical />
                        <div class="button-element">
                            <q-input label="Quand" v-model="date" borderless rounded mask="date" :rules="['date']" style="width: 140px;">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close"  color="primary" flat />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                    </q-icon>
                                </template>
                            </q-input>
                        </div>
                        <div class="button-search">
                            <q-btn
                                style="background: rgba(24, 22, 121, 1); color: white"
                                round
                                icon="search"
                            />
                        </div>
                    </div>
                </q-form>

            </div>
            <div class="button-content">
                <div class="button-hote">
                    <q-btn rounded style="background: rgba(24, 22, 121, 1); color: white; width:120px; height: 40px" label="Devenez hôte" />
                </div>
                <div  >
                    <q-btn class="menu-connexion" >
                        <q-icon name="menu" size="1.7rem" />
                        <q-icon name="account_circle" size="1.7rem"/>
                        <q-menu>
                            <q-list dense style="min-width: 100px">
                                <q-item clickable v-close-popup>
                                    <q-item-section>Connexion</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section>Inscription</q-item-section>
                                </q-item>
                                <q-separator />
                                <q-item clickable v-close-popup>
                                    <q-item-section>Quit</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </div>

            </div>
       </div>
       <div  class="filter">
           <Filter/>
       </div>
       </div>
       
      
    </q-bar> 
  </div>
</template>
<script>
import { fabApple } from '@quasar/extras/fontawesome-v5'
import { ref } from 'vue'
import Filter from './Filter.vue'

   
export default {
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
    components: { Filter }
}


</script>
<style scoped>
.button-element{
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
}
.header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
.bg-white {
    height: 120px;
    border-bottom: 1px solid rgba(10,10,10,.1);
}
.image {
    width: 100px;
    grid-column: span 2;

}
.product-search {
    width: 730px;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 60px;
    cursor: pointer;
    height: 49px;
    border: 0.5px solid;

}
.main-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}
.search-content {
      grid-column: span 3;
      height: 70%;
      width: 70%;
      margin-left: 130px;
  }
.button-search{
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
}
</style>