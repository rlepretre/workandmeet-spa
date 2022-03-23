<template>
  <div class="q-pa-md items-start row q-gutter-md">
    <q-list >
        <q-item class="">
            <q-item-section top thumbnail class="q-ml-none">
                <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    navigation
                    infinite
                    height="250px"
                    width="300px"
                    
                >
                    <q-carousel-slide class="rounded-borders col-9" :name="1" img-src="https://cdn.quasar.dev/img/parallax1.jpg" style="width:300px"/>
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" style="width:300px"/>
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" style="width:300px"/>
                    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" style="width:300px"/>
                </q-carousel>
            </q-item-section>

            <q-item-section class="item">
                <div class="item-up">
                    <q-item-label class="up-espace">{{n.place_type}}</q-item-label>
                    <q-item-label caption>{{n.address}}</q-item-label>
                    <div class="up-hote">
                        <q-item-label class="up-hote-name">{{n.name}}</q-item-label><q-item-label style="margin-top:10px;margin-left:10px;color: rgba(24, 22, 121, 1)">-300m</q-item-label>
                    </div>
                </div>
                <q-separator spaced inset />
                <div class="item-middle1">
                    <q-item-label class="inclus">Inclus</q-item-label>
                    <div class="icons">
                        <q-icon class="q-ml" v-if="n.wifi == 1" name="wifi"/>
                        <q-icon class="q-ml" v-if="n.coffee == 1" name="coffee"/>
                        <q-icon class="q-ml" v-if="n.wc == 1" name="wc"/>
                        <q-icon class="q-ml" v-if="n.power == 1" name="power"/>
                        <q-icon class="q-ml" v-if="n.parking == 1" name="parking"/>

                    </div>
                </div>
                <q-separator spaced inset />
                <div class="item-middle2">
                    <q-item-label class="inclus">Tarifs</q-item-label>
                    <div class="tarifs">
                        
                        <q-item-label ></q-item-label>
                        <q-item-label class="q-ml" caption>{{n.price/100}}€</q-item-label>
                        <q-item-label class="q-ml" caption >{{n.halfday_price/10}}€</q-item-label>
                        <q-item-label class="q-ml" caption>{{n.fullday_price/10}}€</q-item-label>
                    </div>
                </div>
                <q-separator spaced inset />
                <div class="item-down">
                    <q-icon name="star"/>
                    <q-item-label caption>(20 Commentaires)</q-item-label>

                </div>

            </q-item-section>

            <q-item-section side top>
                <q-btn flat round icon="favorite" />
                <q-btn rounded style="background: rgba(24, 22, 121, 1); color: white; margin-top:200px">Réserver</q-btn>

            </q-item-section>
            
        </q-item>
        <q-separator spaced inset />
    </q-list>
     
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
    props: {
        n: {},
        
    },
   
    setup () {
        return {
            slide: ref(1),
            current: ref(3),
        }
    },
    
   
}
</script>
<style  scoped>
.inclus{
    font-weight: 15px;
}
.item {
    width: 300px;
    height:250px;
}
.item-up{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.item-middle1{
 display: flex;
    flex-direction: column;
        align-items: flex-start;

}

.item-middle2{
    display: flex;
    flex-direction: column;
        align-items: flex-start;

}
.item-down{
    display: flex;
    flex-direction: row;
}
.icons {   

    display: flex;
    flex-direction: row;
}
.tarifs{
    display: flex;
    flex-direction: row;    
}
.up-espace{
    font-size: 35px;
}
.up-hote{
    display: flex;
    flex-direction: row;
}
.up-hote-name{
 font-size: 25px;
}
.q-ml{
    margin-right: 5px;
}

</style>