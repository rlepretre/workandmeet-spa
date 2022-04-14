<template>
  <!-- <component :is="view" @onbook="goToCheckout"/> -->
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <div class="py-3"></div> <!-- ./spacer -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from './components/Header.vue';
import Booking from './views/Booking.vue';
import Checkout from './views/Checkout.vue';

export default {
  name: 'App',
  components: {
    Header,
    Booking,
    Checkout
  },
  data: function () {
    return {
      view: 'Booking',
    }
  },
  methods: {
    goToBooking() {
      this.view = 'Booking';
    },
    goToCheckout() {
      this.view = 'Checkout';
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Circular, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

