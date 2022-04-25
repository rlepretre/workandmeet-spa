import axios from "axios";
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state : {
    everythings: [
      
    ],
    searchData: [
      
    ],
    first: [
      
    ],
    user: JSON.parse(localStorage.getItem('user')),
    filterd: [],
    placeType: "",
    itemPrice: -1,
    total: 0,
    item: '',
    searchInput: {'input': '', 'start': '', 'end': '', 'date': '', 'diffTime': 0},
    place_type:'',
    price:'',
    espace:{},
    ancItem: {},
    activeFilter: false,
    activeSearch: false,
    data :[],
    items: [
      {value:1, label:"wifi", count:0, checked: false},
      {value:2,label:"power", count:0, checked: false},
      {value:3,label:"wc", count:0, checked: false},
      {value:4,label:"parking", count:0, checked: false},
      { value:5,label:"coffee", count:0, checked: false}
    ],
    countselect: 0,
    price:'',
    locality:[],
    user: JSON.parse(localStorage.getItem('user')),
  },
  getters:{
      selectedFilters: function() {
        let filters = [];
        let checkedFiters = this.stacks.filter(obj => obj.checked);
        checkedFiters.forEach(element => {
          filters.push(element.label);
        });
        return filters;
      },
      
      filtereverything:(state) => (item) => {
        
        if(item == '')
        { 
          return state.everythings
        }
        else {
          let data = []

          //data = state.everythings.filter(obj => this.selectedFilters.every())
          state.data.push(item)
          //state.items.forEach(element => {
            if(item.count == 1 && state.data.length <= 1) {
              //
              if(item.label == 'wifi') {
                data = state.everythings.filter(everything => everything.wifi == true)
                state.espace = data
              }
              else if(item.label == 'power') {
                data = state.everythings.filter(everything =>everything.power == true)
                state.espace = data
              }
              else if (item.label == 'wc')
              {
                data = state.everythings.filter(everything => everything.wc == true)
                state.espace = data
              }
              else if (item.label == 'parking')
              {
                data= state.everythings.filter(everything => everything.parking == true)
                state.espace = data
              }
              else if (item.label == 'coffee')
              {
                data= state.everythings.filter(everything => everything.coffee == true)
                state.espace = data
              }

            }
          
           
         
          if(state.everythings.find(everything => everything.place_type == item ) && state.data.length <= 1) {
            console.log(item + "item")
              state.place_type = item
              data = state.everythings.filter(everything => everything.place_type === item)
      
          }
          if(state.everythings.find(everything => (everything.price/100) === item) && state.data.length <= 1){
              state.price = item
              data = state.everythings.filter(everything => (everything.price/100) === item)
            
          }
          return data;
        }
        
      },
      filterPlaceType:(state) => (item) =>{
        
        if(item == '')
        { 
          return state.everythings
        }
        else if(state.price != 0 && item != ''){
          return  state.everythings.filter(everything => (everything.price/100) === state.price).filter(everything => everything.place_type === item)
        }
        else {
          console.log(item)
          return state.everythings.filter(everything => everything.place_type === item)
        }
      }


      
  },
  mutations: {
    SET_EVERYTHING (state, data) {
      state.first = data
      state.everythings = data;
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
