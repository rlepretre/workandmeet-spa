<template>
  <!-- Top Bar -->
  <section class="top-bar py-md-2 py-2">
    <div class="container">
      <div class="row py-2">
        <div class="col-8 col-md-6 order-2 order-md-1 mb-md-0 mb-2 d-flex">
            <div>
              <i class="fas fa-star me-1 text-secondary-custom"></i>
              <span class="d-inline-block">4.9</span>
            </div>
            <span class="d-inline-block ms-3">89 Commentaires</span>
            <span class="d-inline-block ms-3">Bruxelle, Belgique</span>
        </div>

        <div class="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-md-end">          
          <a class="text-reset me-3" href="#">
            <i class="fa-regular fa-heart me-1"></i>
            <span class="d-inline-block">Ajouter à mes favoris</span>
          </a>          
          <a class="text-reset" href="#">
            <i class="fa-solid fa-share-nodes me-1"></i>
            <span class="d-inline-block">Partager</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- ./Top Bar-->

  <!-- Product Image -->
  <section class="product-image">
    <div class="container">      
      <div class="row">
        <div class="col-12 col-md-6 mb-md-0 mb-3">
          <!-- <a href=""><img class="img-fluid" src="" alt=""></a> -->
          <div class="w-100 box-thumbnail box-thumbnail-md border border-orange-custom">
            <img class="img-fluid" src="../assets/images/location-de-bureau.jpg" alt="">
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex">
          <div class="w-50 me-2">
            <div class="w-100 mb-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/images/location-de-bureau.jpg" alt="">
            </div>
            <div class="w-100 mt-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/images/location-de-bureau.jpg" alt="">
            </div>
          </div>
          <div class="w-50 ms-2">
            <div class="w-100 mb-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/images/location-de-bureau.jpg" alt="">
            </div>
            <div class="w-100 mt-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/images/location-de-bureau.jpg" alt="">
            </div>
          </div>
        </div>      
      </div>      
    </div>
  </section>
  <!-- ./Product Image -->

  <!-- Product Infos -->
  <section class="product-infos mb-5">
    <div class="container">
      <div class="row py-4">
        <div class="col-6">
          <h2>Bureau Hypercentre Bruxelle</h2>
        </div>
        <div class="col-6 d-md-flex justify-content-between">
          <span class="fs-4 fw-bold">35€/Jour</span>
          <div class="d-flex">
            <div>
              <i class="fas fa-star me-1 text-secondary-custom"></i>
              <span class="d-inline-block">4.9</span>
            </div>
            <span class="d-inline-block ms-3">89 Commentaires</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ./Product Infos -->

  <!-- Product Details -->
  <section class="product-details pt-5">
    <div class="container">
      <div class="row">

        <!-- Left Col -->
        <div class="col-12 col-md-6 mb-5 mb-md-0">

          <!-- Product alerts -->
          <div class="product-alerts py-5">
            <div class="d-flex">
              <i class="fa-solid fa-location-dot fa-2x me-5"></i>
              <div>
                <h4 class="m-0">Idéalement situé</h4>
                <p class="m-0 fs-7 py-3">90% des travailleurs ont attribué 5 étoiles à cet emplacement.</p>
              </div>
            </div>
            <div class="pt-5">
              <i class="fa-solid fa-circle-exclamation fa-2x me-5"></i>
              <span class="fs-7">Annulation gratuite 24H à l'avance</span>
            </div>
          </div>
          <!-- ./Product alerts -->

          <hr>

          <!-- Product description -->
          <div class="product-description py-5">
            <p>
              Beau bureau à louer dans un grand immeuble en plein coeur de Bruxelle, 
              avec une manifique vue sur la Cathédrale Saint Michel et Gudule
            </p>
            <p>
              Parfaitement placé entre le mythique théatre de Monaie et l'incroyable
              Grande Place de Bruxelle ainsi qu'à 50m du Délirum et du Drug Opéra
            </p>
          </div>
          <!-- ./Product description -->

          <!-- Product plus -->
          <div class="product-plus py-5">
            <h4 class="mb-5">Ce que propose ce logement</h4>
            <p>
              <i class="fa-solid fa-restroom fa-2x me-5"></i>
              <span>Toilettes</span>
            </p>
            <p>
              <i class="fa-solid fa-bed fa-2x me-5"></i>
              <span>Salle de pause</span>
            </p>
            <p>
              <i class="fa-solid fa-wifi fa-2x me-5"></i>
              <span>Wifi</span>
            </p>            
          </div>
          <!-- ./Product plus -->
        </div>
        <!-- ./Left Col -->

        <!-- Right Col -->
        <div class="col-12 col-md-6">
          <div class="p-5 border border-orange-custom border-radius-12 w-100">
            <div class="d-flex border border-radius-8">
              <div class="p-3 w-20 border-end">
                <h6 class="text-uppercase fs-7 fw-bold">Date</h6>
              </div>
              <div class="p-3 w-40 border-end">
                <h6 class="text-uppercase fs-7 fw-bold">Heure de début</h6>
                <DateTimeEdit/>
              </div>
              <div class="p-3 w-40">
                <h6 class="text-uppercase fs-7 fw-bold">Heure de fin</h6>
                <DateTimeEdit/>
              </div>
            </div>

            <div class="py-5 mb-5">
              <button type="button" class="btn w-100 btn-primary-custom p-3" @click="onBooking">Réserver</button>
            </div>

            <div class="pt-5">
              <div class="d-flex justify-content-between mb-4">
                <p class="fs-7">5€ * 8 Heures</p>
                <p class="fw-bold">40€</p>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <p class="fs-7">Frais de service</p>
                <p class="fw-bold">6€</p>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-4">
                <p class="text-uppercase fw-bold">Total</p>
                <p class="fw-bold">46€</p>
              </div>
            </div>

          </div>          
        </div>
        <!-- ./Right Col -->

      </div>
    </div>
  </section>
  <!-- ./Product Details -->

  <CommentEdit/>

  <section class="product-comments py-5">
    <div class="container">
      <div class="row">        
        <div class="col-12 d-flex mb-4">
          <div>
            <i class="fas fa-star me-1 text-secondary-custom"></i>
            <span class="d-inline-block">4.9</span>
          </div>
          <span class="d-inline-block ms-3">89 Commentaires</span>
        </div>
        <div class="col-12 col-md-6 mb-5 d-flex" v-for="comment in comments" :key="comment.id">
          <div class="comment-thumbnail">
            <img src="../assets/images/v3_0125956.jpg" alt="">
          </div>
          <div class="ms-3">
            <h6 class="m-0 fw-bold">{{ comment.author }}</h6>
            <p class="fs-7">{{ comment.date }}</p>
            <p class="m-0">{{ comment.content }}</p>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <button type="button" class="btn bg-black text-white">Afficher plus</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import CommentEdit from "../components/CommentEdit.vue";
import DateTimeEdit from "../components/DateTimeEdit.vue"

export default {
  name: 'Booking',
  emits: ['on-booking'],
  components: {
    CommentEdit,
    DateTimeEdit
  },

  setup(props, ctx) {
    const router = useRouter();
    const comments = ref([
        {
          id: 1,
          author: 'Wile',
          date: 'Février 2021',
          content: 'Bon logement pas cher très bien situé à Bruxelle'
        },
        {
          id: 2,
          author: 'Charpentier C',
          date: 'Septembre 2021',
          content: 'Etant non-fumeur et appréciant le calme je me suis senti très alaise'
        },
        {
          id: 3,
          author: 'Bruno DuBois',
          date: 'Décembre 2021',
          content: 'Hôte très accueillant, bureau propre et confortable, je recommande!'
        },
        {
          id: 4,
          author: 'Geogette F',
          date: 'Avril 2021',
          content: 'Je suis resté un jour sur Bruxelle, le bureau de Jean Philippe est super situé (hypercentré).'
        }
    ])

    function onBooking() {
      // ctx.emit('on-booking');
      router.push('checkout')
    }

    return {
      comments,
      onBooking
    }
  },
}
</script>

<style lang="scss" scoped>

</style>