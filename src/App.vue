<template>
  <template v-if="isBooking">
    <Booking @onBook="goToCheckout"/>
  </template>
  <template v-else-if="isCheckout">
    <Checkout/>
  </template>

</template>

<script>
// import Header from './components/Header.vue';
import Booking from './components/Booking.vue';
import Checkout from './components/Checkout.vue';

export default {
  name: 'App',
  components: {
    // Header,
    Booking,
    Checkout
  },
  data: function () {
    return {
      page: 1,
    }
  },
  computed: {
    isBooking() {
      return this.page === 1;
    },
    isCheckout() {
      return this.page === 2;
    }
  },
  methods: {
    goToBooking() {
      this.page = 1;
    },
    goToCheckout() {
      this.page = 2;
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

