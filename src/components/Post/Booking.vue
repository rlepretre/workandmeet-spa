<template>
  <!-- Top Bar -->
  <section class="top-bar py-md-2 py-2">
    <div class="container">
      <div class="row py-2">
        <div class="col-8 col-md-6 order-2 order-md-1 mb-md-0 mb-2 d-flex">
            <div>
              <i class="fas fa-star me-1 text-secondary-custom"></i>
              <span class="d-inline-block">{{espace.rating}}</span>
            </div>
            <span class="d-inline-block ms-3">{{espace.review_count}} Commentaires</span>
            <span class="d-inline-block ms-3">{{espace.province}}, Belgique</span>
        </div>

        <div class="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-md-end">          
          <a class="text-reset me-3" href="#" >
            <i class="fa-solid fa-heart me-1" :class="{ active: activeClasses }" @click="addFav"></i>
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
            <img class="img-fluid" src="../assets/location-de-bureau.jpg" alt="">
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex">
          <div class="w-50 me-2">
            <div class="w-100 mb-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/location-de-bureau.jpg" alt="">
            </div>
            <div class="w-100 mt-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/location-de-bureau.jpg" alt="">
            </div>
          </div>
          <div class="w-50 ms-2">
            <div class="w-100 mb-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/location-de-bureau.jpg" alt="">
            </div>
            <div class="w-100 mt-3 box-thumbnail box-thumbnail-sm border border-orange-custom">
              <img class="img-fluid" src="../assets/location-de-bureau.jpg" alt="">
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
          <h2>{{espace.name}}</h2>
        </div>
        <div class="col-6 d-md-flex justify-content-between">
          <span class="fs-4 fw-bold">{{espace.price/ 100 }}€/ heure</span>
          <div class="d-flex">
            <div>
              <i class="fas fa-star me-1 text-secondary-custom"></i>
              <span class="d-inline-block">{{espace.rating}}</span>
            </div>
            <span class="d-inline-block ms-3">{{espace.review_count}} Commentaires</span>
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
           {{espace.desc}}
          </div>
          <!-- ./Product description -->

          <!-- Product plus -->
          <div class="product-plus py-5">
            <h4 class="mb-5">Ce que propose ce logement</h4>
            <p v-if="espace.toilette == 1">
              <i class="fa-solid fa-restroom fa-2x me-5"></i>
              <span>Toilettes</span>
            </p>
            <p v-if="espace.coffee == 1">
              <i class="fa-solid fa-mug-saucer fa-2x me-5"></i>             
              <span>Café</span>
            </p>
            <p v-if="espace.wifi == 1">
              <i class="fa-solid fa-wifi fa-2x me-5"></i>
              <span>Wifi</span>
            </p>  
            <p v-if="espace.parking == 1">
              <i class="fa-solid fa-square-parking fa-2x me-5"></i>
              <span>Parking</span>
            </p>   
            <p v-if="espace.power == 1">
             <i class="fa-solid fa-plug fa-2x me-5"></i>
              <span>Power</span>
            </p>         
          </div>
          <!-- ./Product plus -->
        </div>
        <!-- ./Left Col -->

        <!-- Right Col -->
        <div class="col-12 col-md-6">
          <div class="p-5 border border-orange-custom border-radius-12 w-100">
            <div class="d-flex border border-radius-8">
              
              <div class="p-3 w-40 border-end">
                <h6 class="text-uppercase fs-7 fw-bold">Heure de début</h6>
                <DateTimeEdit/>
              </div>
              <div class="p-3 w-40">
                <h6 class="text-uppercase fs-7 fw-bold">Heure de fin</h6>
                <DateTimeEdit2/>
              </div>
            </div>

            <div class="py-4 mb-5">
              <Checkout/>
            </div>

            <div class="pt-5">
              <div class="d-flex justify-content-between mb-4">
                <p class="fs-7">{{espace.price/ 100 }} * {{$store.state.searchInput.diffTime}} Heures</p>
                <p class="fw-bold">{{(espace.price * $store.state.searchInput.diffTime)/ 100}}€</p>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <p class="fs-7">Frais de service</p>
                <p class="fw-bold">6€</p>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-4">
                <p class="text-uppercase fw-bold">Total</p>
                <p v-if="$store.state.searchInput.diffTime > 0" class="fw-bold">{{((espace.price * $store.state.searchInput.diffTime)/ 100) +6}}€</p>
                <p v-else class="fw-bold">0€</p>
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
            <span class="d-inline-block">{{espace.rating}}</span>
          </div>
          <span class="d-inline-block ms-3">{{espace.review_count}} Commentaires</span>
        </div>
        <div class="col-12 col-md-6 mb-5 d-flex" v-for="comment in comments" :key="comment.id">
          <div class="comment-thumbnail">
            <img src="../assets/v3_0125956.jpg" alt="">
          </div>
          <div class="ms-3">
            <h6 class="m-0 fw-bold">{{ comment.author.firstname }} {{ comment.author.name }}</h6>
            <p class="m-0">{{ comment.body }}</p>
            <p class="fs-7">{{ comment.rating }}/5</p>
            <p class="fs-7">{{ comment.updated_at }}</p>          
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
import axios from "axios";
import CommentEdit from "../Post/CommentEdit.vue";
import DateTimeEdit from "../Post/DateTimeEdit.vue"
import DateTimeEdit2 from "../Post/DateTimeEdit2.vue"
import Checkout from './Checkout.vue';
export default {
  name: 'BookingView',
  
  components: {
    CommentEdit,
    DateTimeEdit,
    DateTimeEdit2,
    Checkout
  },
  setup() {
    

    return {
      
      
    };
  },
  data() {
      console.log(this.$route.params.id);
         console.log(this.espace)

    return {
      espace:{},
      comments:[],
      activeClasses: false,
    }
  },
  methods: {
    
    goToCheckout() {
      this.$emit('onBook');
    },
    addFav() {
      this.activeClasses = !this.activeClasses;
      
    }
  },
  mounted() {
    return axios.get(`/place/${this.$route.params.id}`)
      .then(response => {

        this.espace = response.data
      }),
    axios.get(`/place/${this.$route.params.id}/comment`)
    .then(response => {
      console.log(response.data)
      this.comments = response.data
    })
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: red !important;
}

.product-alerts.py-5 {display: flex;align-items: start;justify-content: center;flex-flow: column;}

h4.m-0 {text-align: start;}

.product-description.py-5 {text-align: start;}

h4.mb-5 {text-align: start;}

p {text-align: start;}
</style>