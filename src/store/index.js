import axios from "axios";
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state : {
    everythings: [
      
    ],
    item: '',
    place_type:'',
    price:'',
    espace:{},
    ancItem: {},
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
    locality:[]
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
            else if(state.data.length > 1) {
              /*state.data.forEach(d => {
                if(state.place_type != '' && item != '' ){
                  data = state.everythings.filter(everything => everything.place_type === state.place_type).filter(everything => (everything.price/100) === item)
                }
                if(state.price != 0 && item != ''){
                  data = state.everythings.filter(everything => (everything.price/100) === state.price).filter(everything => everything.place_type === item)
                }
                
                for(let i=0 ; i < state.data.length; i++){
                  console.log(state.data[i].label)
                  console.log(state.data[i].label == d.label && state.data[i].label == d.label )
                  if(((state.data[i].label == "wifi" || state.data[i].label == "power") && state.everythings.find(everything =>everything.place_type === item))){
                    console.log(state.espace)
                    data = state.espace.filter(everything => everything.place_type === item)
                  }
                  
                  if(state.data[i].label == "wifi" && state.data[i].label == "power" ) {
                    console.log(state.data[i])
                    data = state.everythings.filter(everything => everything.wifi == true).filter(everything =>everything.power == true)
                  }
                  if(state.data[i].label == "wifi" && state.data[i].label == "power" && state.data[i].label=="wc"){
                    data = state.everythings.filter(everything => everything.wifi == true).filter(everything =>everything.power == true).filter(everything => everything.wc == true)
  
                  }
                 /* if(state.data[i].label == "wifi" && state.data[i].label == "power" && state.data[i].label=="wc" && state.data[i].label == "parking") {
                    data = state.everythings.filter(everything => everything.wifi == true).filter(everything =>everything.power == true).filter(everything => everything.wc == true).filter(everything => everything.parking == true)
  
                  }
                  if(state.data[0].label == "power", state.data[1].label == "wc") {
                    console.log(state.data[0] == "power" && state.data[1] == "wc")
                    data = state.everythings.filter(everything =>everything.power == true).filter(everything => everything.wc == true)
  
                  }
                  if(state.data[0].label == "power" && state.data[1].label=="wc" && state.data[2].label == "parking") {
                    data = state.everythings.filter(everything =>everything.power == true).filter(everything => everything.wc == true).filter(everything => everything.parking == true)
  
                  }
                  if(state.data[0].label == "power" && state.data[1].label=="wc" && state.data[2].label == "parking" && state.data[3].label=="coffee") {
                    data = state.everythings.filter(everything =>everything.power == true).filter(everything => everything.wc == true).filter(everything => everything.coffee == true).filter(everything => everything.parking == true)
  
                  }
                  if(state.data[0].label=="wc" && state.data[1].label == "parking") {
                    data = state.everythings.filter(everything => everything.wc == true).filter(everything => everything.parking == true)
  
                  }
                  if(state.data[0].label=="wc" && state.data[1].label == "parking" && state.data[2].label=="coffee"){
                    data = state.everythings.filter(everything => everything.wc == true).filter(everything => everything.coffee == true).filter(everything => everything.parking == true)
  
                  }
                  if(state.data[0].label == "parking" && state.data[1].label=="coffee"){
                    data = state.everythings.filter(everything => everything.coffee == true).filter(everything => everything.parking == true)
  
                  }
                  if( state.data[0].label == "wifi" && state.data[1].label=="coffee") {
                    data = state.everythings.filter(everything => everything.wifi == true).filter(everything => everything.coffee == true)
  
                  }
                  if(state.data[0].label == "wifi" && d.label=="coffee" && state.data[3].label == "parking"){
                    data = state.everythings.filter(everything => everything.wifi == true).filter(everything => everything.coffee == true).filter(everything => everything.parking == true)
                  }
                }
              });*/
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
        
       
       

        /*if(item.label !== '') {
          console.log(item)
          let data2 = [];
          
          if(item.label == 'wifi' )
          {
            state.ancItem = item
            if( item.count == 1) {
              data2 = state.everythings.filter(everything => everything.wifi)
              state.data = data2
            }

          }
          else if (state.ancItem !== item) {
            console.log(state.ancItem)
            let label = item.label
            if (item.label == 'power')
              {
                console.log(state.data)
                  data2 = state.data.filter(everything =>everything.power)
              }
          }
          console.log(data2)
          return data2;
        }*/
        
        /*else if (item == 'power')
        {

          data = (state.everythings.filter(everything => everything.power))
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
        }*/
         
        /*if(state.everythings.find(everything =>everything.place_type === item)) {

          return state.everythings.filter(everything => everything.place_type === item)
        }
        if(item) 
        { 
          return state.everythings.filter(everything => (everything.price/100) === item)
        }*/
      },
      /*filterPrice:(state) => (price) =>{
      price = price
        if(price == '')
        { 
          return state.everythings
        }
        else if(state.place_type != '' && state.price != '' ){
          console.log(price)
          return state.everythings.filter(everything => everything.place_type === state.place_type).filter(everything => (everything.price/100) === price)
        }
        else {
          console.log(price)
          return console.log(state.everythings.filter(everything => (everything.price/100) === price))
        }
      
      },*/
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
