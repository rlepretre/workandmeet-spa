import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import  VueGoogleMaps from '@fawmi/vue-google-maps'
import store from './store'


const app = createApp(App)

app.use(Quasar, {
  plugins: {
  }
})
app.use(VueGoogleMaps, {

  load: {
    key: 'AIzaSyB6Iosn-pQ48TS0zT2TOOW0SVY-D4q8ym0',
  },
})
app.use(store)

app.mount('#app')