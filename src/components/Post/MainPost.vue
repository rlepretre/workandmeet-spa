<template>
  <router-link to="/">GO BACK TO HOME</router-link>
    <Booking/>
  <!-- <template v-else-if="isCheckout">
    <Checkout/>
  </template> -->

</template>

<script>
import Header from './Header.vue';
import Booking from './Booking.vue';
// import Checkout from './StripeElementPayment.vue';

export default {
  name: 'App',
  components: {
    Header,
    Booking
  }
}
</script>


<style lang="scss" scoped>
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

