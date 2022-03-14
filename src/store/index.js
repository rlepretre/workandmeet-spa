import axios from "axios";
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state : {
    everythings: [],
    item:''
  },
  getters:{
      
      filtereverything:(state) => (item) =>{
        
        item = item
        if(item == '')
        {
          return state.everythings
        }
        else if (item == 'wifi')
        {
          return state.everythings.filter(everything => everything.wifi)
        }
        else if (item == 'power')
        {
          return state.everythings.filter(everything => everything.power)
        }
        else if (item == 'wc')
        {
          return state.everythings.filter(everything => everything.wc)
        }
        else if (item == 'parking')
        {
          return state.everythings.filter(everything => everything.parking)
        }
        else if (item == 'coffee')
        {
          return state.everythings.filter(everything => everything.coffee)
        }
      }
      
  },
  mutations: {
    SET_EVERYTHING (state, data) {
      state.everythings = data;
      console.log(state.everythings)
    },
    
  },
  actions: {
    GET_EVERYTHING ({commit}) {
      axios
      .get('/api')
      .then(response => {
        commit('SET_EVERYTHING', response.data)
      })
    }
  },
})

export default store;
