<template>
  <GoogleMap
  api-key="AIzaSyB6Iosn-pQ48TS0zT2TOOW0SVY-D4q8ym0"
  style="width: 100%; height: 600px"
  :center="center"
  :zoom="3"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }

    return { center }
  },
})
</script>
