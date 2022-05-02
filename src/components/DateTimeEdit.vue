<template>
  <!-- DateTime Edit -->
    <div class="d-flex">
        <div class="d-flex">
            <div class="me-2">
                <q-icon name="event" size="20px" class="cursor-pointer">                  
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="DD/MM/YYYY">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Valider" color="primary" flat />
                      </div>
                    </q-date>
                </q-popup-proxy>
                </q-icon>
            </div>
            <div>{{ date }}</div>
        </div>
        <div class="mx-2">à</div>
        <div class="d-flex">
            <div>{{ time }}</div>
            <div class="ms-2">
                <q-icon name="access_time" size="20px" class="cursor-pointer">                  
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="time">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Valider" color="primary" flat />
                      </div>
                    </q-time>
                </q-popup-proxy>
            </q-icon>
            </div>
        </div>
    </div>
  <!-- ./DateTime Edit -->
</template>

<script>
import { ref } from 'vue'
import { date as d } from 'quasar'

export default {
  name: 'DateTimeEdit',
  setup() {
    const date = ref(d.formatDate(Date.now(), 'DD/MM/YYYY'))
    const time = ref(d.formatDate(Date.now(), 'HH:mm'))

    return {
      date,
      time
    }
  }
}
</script>

<style scoped lang="scss">

</style>
