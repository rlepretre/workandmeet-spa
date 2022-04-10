<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./Header.vue";
import EspaceList from "./Espaces/EspaceList.vue";
</script>

<template>
  <div class="contents">
    <Header />
    <div class="empty"></div>
    <EspaceList />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.empty {width: 126%;height: 1px;background: #00000057;margin-top: 61px;}

.show {
  display: block !important;
}

@media only screen and (max-width: 700px) {
  .empty{
    display: none;
  }
  .product-search {
    width: 100%;
    cursor: pointer;
    height: 49px;
    border: 0px solid;
    flex-flow: column;
    border: none !important;
  }
  .header {
    margin-top: 10px !important;
  }
  .toggle {
    display: block !important;
  }
  .container.content {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 100px;
    background: #a69b9b;
    padding: 10px;
  }
  .q-pa-md.search {
    display: none;
  }
  .filter {
    display: none;
  }
  .product-search {
    padding-left: 0;
    display: unset;
  }
  .container-left,
  .container-middle,
  .content {
    display: unset !important;
  }
  .map {
    grid-column: span 3;
    width: 100%;
    height: 200px !important;
  }
  .espaces {
    display: flex;
    flex-flow: column-reverse;
  }
  .product-search {
    position: fixed;
    bottom: 0px;
    right: 0;
    z-index: 999;
    height: fit-content !important;
    border-radius: 0 !important;
  }
}

@media only screen and (max-width: 1200px) {
  .map {
    grid-column: span 3;
    width: 400px;
    height: 600px;
  }
}
@media only screen and (max-width: 1000px) {
  .map {
    grid-column: span 3;
    width: 300px;
    height: 500px;
  }
  .q-item.q-item-type.row.no-wrap {
    flex-flow: column;
  }
  .reserver {
    margin-top: 0 !important;
  }
}
@media only screen and (max-width: 600px) {
  .espaces {
    align-items: center;
  }
}
</style>