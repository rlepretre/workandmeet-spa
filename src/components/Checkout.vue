<template>
<form class="" action="">
  <!-- Checkout Details -->
  <section class="checkout-details py-5">
    <div class="container">
      <div class="row">

        <!-- Left Col -->
        <div class="col-12 col-md-6 mb-5 mb-md-0">
            <h2>Demande de réservation</h2>

            <div class="py-3"></div><!-- ./ spacer -->

            <div class="border border-radius-8 p-4">
                <p class="fw-bold">Bonne affaire</p>
                <p class="fs-7">
                    A vos dates, le tarif est inférieur de 5€ au tarif moyen
                    par jour au cours des 3 derniers mois.
                </p>
            </div>
            
            <div class="py-4"></div><!-- ./ spacer -->

            <h4>Votre arrivée</h4>
            
            <div class="py-4"></div><!-- ./ spacer -->

            <div class="d-flex justify-content-between">
                <div>
                    <h4>Dates:</h4>
                    <p>Mercredi 9 Mars 2022</p>
                </div>
                <a href="#">Modifier</a>
            </div>

            <div class="py-4"></div><!-- ./ spacer -->

            <div class="d-flex justify-content-between">
                <div>
                    <h4>Occupants:</h4>
                    <p>1 Travailleur</p>
                </div>
                <a href="#">Modifier</a>
            </div>

            <div class="py-4"></div><!-- ./ spacer -->

            <!-- Paiement Method -->
            <div class="d-flex justify-content-between align-items-center">
              <span>Payer avec</span> 
              <img class="w-25" src="../assets/payments_methods.png" alt="">
            </div>
            <div class="input-group-custom position-relative mb-5" style="padding:1px 0">
                <div class="position-absolute p-4"><i class="fa-regular fa-credit-card fs-5"></i></div>
                <select class="form-select border-radius-8 p-3" name="" id="" style="padding-left: 5rem!important">
                    <option value="">Carte de crédit au débit</option>
                </select>
            </div>
            <div class="input-group-custom border border-radius-8 mb-5">
                <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Numéro de carte">               
                <div class="border-bottom"></div><!-- ./hr -->
                <div class="d-flex">
                    <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Expiration">
                    <div class="vr"></div><!-- ./vr -->
                    <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Crytogramme">
                </div>
            </div>
            <!-- ./Paiement Method -->

            <!-- Billing Address -->
            <h4>Adresse de Facturation</h4>
            <div class="input-group-custom border border-radius-8 mb-5">
                <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Adresse postal">
                <div class="border-bottom"></div><!-- ./hr -->
                <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Numéro d'appartement ou batiment">
                <div class="border-bottom"></div><!-- ./hr -->
                <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Ville">
                <div class="border-bottom"></div><!-- ./hr -->
                <div class="d-flex">
                    <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Etat">
                    <div class="vr"></div><!-- ./vr -->
                    <input type="text" class="form-control input-focus-2 border-0 p-3" placeholder="Code postal">
                </div>
            </div>
            <div class="input-group-custom border border-radius-8">
                <label class="p-3 fs-7" for="">Pays/Région</label>
                <select class="form-select input-focus-2 border-0 p-3" name="" id="">
                    <option value="">--- Sélectionner ---</option>
                    <option value="belgique">Belgique</option>
                </select>
            </div>
            <!-- ./Billing Address -->

        </div>
        <!-- ./Left Col -->

        <!-- Right Col -->
        <div class="col-12 col-md-6">
          <div class="p-5 border border-radius-12 w-100">
            <div class="d-flex">
              <div class="w-50 overflow-hidden rounded-3">
                <img class="img-fluid" src="../assets/location-de-bureau.jpg" alt="">
              </div>
              <div class="p-3 w-50">
                  <p>Coworking à Mont-Saint-Gubert</p>
                  <div class="d-flex">
                    <div>
                        <i class="fas fa-star me-1 text-secondary-custom"></i>
                        <span class="d-inline-block">4.9</span>
                    </div>
                    <span class="d-inline-block ms-3">(89 Commentaires)</span>
                </div>
              </div>
            </div>

            <hr class="my-5">

            <div class="">
                <h5 class="fw-bold">Détails du Prix</h5>
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

        <div class="col-12 py-4">
          <h5 class="fw-bold">Conditions d'annulation</h5>
          <p>
              Annulation gratuite avant le 8 Mars à 15:00.
              Annulez avant 15 Mars et obtenez un remboursement intégral
          </p>
        </div>

        <!-- Button -->
        <div class="col-12 text-center py-3">
          <button type="submit" class="btn btn-secondary-custom text-primary-custom w-100 w-md-auto p-3">Demande de réservation</button>
        </div>
        <!-- ./Button -->
      </div>
    </div>
  </section>
  <!-- ./Checkout Details -->

    
</form>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'CheckoutView',
  components: {
    Header
  },
  data() {
    return {
      comments: [
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>