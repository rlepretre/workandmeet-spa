import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App)

app.use(Quasar, {
  plugins: {
  }, // import Quasar plugins and add here
})
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
    },
})
// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')