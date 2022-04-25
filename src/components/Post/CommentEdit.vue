<template>
  <!-- Comment Edit -->
  <section class="comment-edit py-md-2 py-2">
    <div class="container">
      <div class="row py-2">
        <div class="col-12">
          <div class="text-end">
            <button type="button" class="btn bg-black text-white" @click="toggleForm">Ajouter un commentaire</button>
          </div>
        </div>

        <div class="col-12">          
          <div v-if="showForm">
            <div class="form-group mb-3">
              <label class="me-4">Appréciation: </label>
              <q-rating
              v-model="rating"
              name="rate"
              size="1.5rem"
              color="grey-7"
              color-selected="secondary-custom"
              icon="far fa-star"
              icon-selected="fas fa-star"/>
            </div>
            <div class="form-group mb-3">
              <textarea v-model="bodyArea" class="form-control bg-grey-3 p-4" name="comment" placeholder="Entrer votre commentaire" cols="30" rows="10"></textarea>
            </div>
            <div class="">
              <button @click="submitComment" class="btn bg-black text-white">Ajouter votre un commentaire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ./Comment Edit -->
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CommentEdit',
  setup() {
    const showForm = ref(false)
    const rating = ref(0)
    
    function toggleForm() {
      showForm.value = !showForm.value
    }

    return {
      showForm,
      rating,
      toggleForm
    }
  },
  data(){
    return {
      bodyArea: ''
    }
  },
  methods: {
    submitComment(){
      alert(this.rating)
      alert(this.bodyArea)
      axios.post(`/place/${this.$route.params.id}/comment`,{body:this.bodyArea,rating: this.rating, place_id: this.$route.params.id, token: this.$store.state.user.token})
.then(response => {
console.log(response)
//console.log(response)
//this.comments = response.data
})
    }
  }
}
</script>

<style scoped lang="scss">

</style>
