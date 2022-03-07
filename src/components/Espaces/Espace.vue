<template>
  <div class="q-pa-md items-start row q-gutter-md"  v-for="n in 5"
                            :key="n">
    <q-list >
        <q-item class="">
            <q-item-section top thumbnail class="q-ml-none">
                <!--<q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    navigation
                    height="300px"
               >
                    <q-carousel-slide :name="1" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-8 " src="https://cdn.quasar.dev/img/mountains.jpg" style="width:300px"/>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="rounded-borders  full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" style="width:300px"/>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="rounded-borders col-8 full-height" src="https://cdn.quasar.dev/img/cat.jpg" style="width:300px"/>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="4" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="rounded-borders col-8 full-height" src="https://cdn.quasar.dev/img/material.png" style="width:300px"/>
                        </div>
                    </q-carousel-slide>
                </q-carousel>-->
                <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    navigation
                    infinite
                    height="250px"
                    width="300px"
                >
                    <q-carousel-slide class="rounded-borders col-9" :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" style="width:300px"/>
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" style="width:300px"/>
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" style="width:300px"/>
                    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" style="width:300px"/>
                </q-carousel>
            </q-item-section>

            <q-item-section class="item">
                <div class="item-up">
                    <q-item-label class="up-espace">Coworking</q-item-label>
                    <q-item-label caption>Mont-saint-guibert</q-item-label>
                    <div class="up-hote">
                        <q-item-label class="up-hote-name">Chez Xavier</q-item-label><q-item-label style="margin-top:15px;margin-left:10px;color: rgba(24, 22, 121, 1)">-300m</q-item-label>
                    </div>
                </div>
                <q-separator spaced inset />
                <div class="item-middle1">
                    <q-item-label class="inclus">Inclus</q-item-label>
                    <div class="icons">
                        <q-icon class="q-ml" name="wifi"/>
                        <q-icon class="q-ml" name="wifi"/>
                        <q-icon class="q-ml" name="wifi"/>
                        <q-icon class="q-ml" name=""/>
                        <q-icon class="q-ml" name="printer"/>


                    </div>
                </div>
                <q-separator spaced inset />
                <div class="item-middle2">
                    <q-item-label class="inclus">Tarifs</q-item-label>
                    <div class="tarifs">
                        
                        <q-item-label ></q-item-label>
                        <q-item-label class="q-ml" caption>5€</q-item-label>
                        <q-item-label class="q-ml" caption >40€</q-item-label>
                        <q-item-label class="q-ml" caption>80€</q-item-label>
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
  <q-pagination
        v-model="current"
        :max="5"
        direction-links
        flat
        color="grey-4"
        active-color="primary"
      />
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
        slide: ref(1),
        current: ref(3),
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
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
    font-size: 50px;
}
.up-hote{
    display: flex;
    flex-direction: row;
}
.up-hote-name{
 font-size: 30px;
}
.q-ml{
    margin-right: 5px;
}

</style>