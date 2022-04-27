<template>
<div>
    <q-bar class="bg-white" style="height: 160px">
        <div class="container">
            <div class="headerContens">
                <div class="header">
                    <div class="image">
                        <q-img :src="imgUrl"/>
                    </div>
                    <div class="button-content">
                        <div class="toggle">
                            <q-btn style="background: rgba(24, 22, 121, 1); color: white" round icon="search" />
                        </div>
                        <div class="button-hote">
                            <q-btn rounded style="
                    background: rgba(24, 22, 121, 1);
                    color: white;
                    width: 120px;
                    height: 40px;
                  " label="Devenez hôte" />
                        </div>
                        <div>
                            <q-btn class="menu-connexion">
                                <q-icon name="menu" size="1.7rem" />
                                <q-icon name="account_circle" size="1.7rem" />
                                <q-menu>
                                    <q-list dense style="min-width: 100px">
                                        <q-item clickable v-close-popup>
                                            <q-item-section @click="openLogin">Connexion</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                            <q-item-section @click="openSignup">Inscription</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable v-close-popup>
                                            <q-item-section>Quit</q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </div>
                    </div>
                </div>
                <div class="toggle">
                    <div class="container-right">
                        <q-btn outline rounded color="white" text-color="black" icon="tune" label="Filtre" @click="toggle('filter')" />
                        <div class="button-search">
                            <q-btn style="background: rgba(24, 22, 121, 1); color: white" round icon="search" @click="toggle('search')" />
                        </div>
                    </div>
                </div>
                <div class="q-pa-md search" :class="{show: this.$store.state.activeSearch}">
                    <q-form class="q-gutter-md search-content">
                        <div class="product-search">
                            <div class="search-element">
                                <input style="width: 140px; margin-bottom: 20px; margin-left: 20px" type="text" v-model="$store.state.searchInput.input" placeholder="Où">
                                <!-- <q-select
                    borderless
                    v-model="$store.state.searchInput.input"
                    :options="options"
                    use-input
                    input-debounce="0"
                    @filter="filterFn"
                    label="Où"
                    style="width: 140px; margin-bottom: 20px; margin-left: 20px"
                    icon="place"
                    @click.stop
                  /> -->
                            </div>
                            <q-separator spaced vertical />
                            <div class="search-element">
                                <q-input label="De quelle heure" borderless style="width: 140px; margin-bottom: 15px" type="time" v-model="$store.state.searchInput.start">
                                </q-input>
                            </div>
                            <q-separator spaced vertical />

                            <div class="search-element">
                                <q-input borderless label="A quelle heure" style="width: 140px; margin-bottom: 15px" type="time" v-model="$store.state.searchInput.end">
                                </q-input>
                            </div>
                            <q-separator spaced vertical />
                            <div class="button-element">
                                <input style="width: 140px; margin-bottom: 20px; margin-left: 20px" type="date" v-model="$store.state.searchInput.date">
                                <!-- <q-input
                    label="Quand"
                    v-model="$store.state.searchInput.date"
                    borderless
                    rounded
                    mask="date"
                    :rules="['date']"
                    style="width: 140px"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="date">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template> -->
                                <!-- </q-input> -->
                            </div>
                            <div class="button-search">
                                <q-btn @click="searchEle" style="background: rgba(24, 22, 121, 1); color: white" round icon="search" />
                            </div>
                        </div>
                    </q-form>
                </div>
            </div>
            <div class="filter" :class="{show: this.$store.state.activeFilter}">
                <Filter />
            </div>
        </div>
    </q-bar>
    <Login :interception="interception" @clicked="onClickChild" />
    <Signup :inscription="inscription" @clickedInsc="onClickSignup" />
</div>
<div>

</div>
</template>

<script>
import axios from 'axios'
import {
    fabApple
} from "@quasar/extras/fontawesome-v5";
import {
    ref
} from "vue";
import Filter from "./Filter.vue";
import Login from "./Auth/Login.vue";
import Signup from "./Auth/Signup.vue";
import imgUrl from '../assets/logo.png'

let locality = [];

export default {
    setup() {

        const url = ref("src/assets/logo.png");
        const options = ref(locality);
        const interception = ref(false);
        const inscription = ref(false)
        return {
            locality,
            timeStart: ref("10:56"),
            timeFinish: ref("10:56"),
            date: ref("2019/02/01"),
            model: ref(null),
            options,
            url,
            fabApple,
            interception,
            inscription,
            filterFn(val, update) {
                if (val === "") {
                    update(() => {
                        options.value = locality;
                    });
                    return;
                }

                update(() => {
                    const needle = val.toLowerCase();
                    options.value = locality.filter(
                        (v) => v.toLowerCase().indexOf(needle) > -1
                    );
                });
            },
        };
    },
    methods: {
        toggle(val) {
            if (val == 'filter') {
                this.$store.state.activeSearch = false
                this.$store.state.activeFilter = !this.$store.state.activeFilter
            } else if (val == 'search') {
                this.$store.state.activeFilter = false
                this.$store.state.activeSearch = !this.$store.state.activeSearch
            }

        },
        async searchEle() {
            if (this.$store.state.searchInput.date != '' && this.$store.state.searchInput.start != '' && this.$store.state.searchInput.end != '') {
                var timeStart = new Date("01/01/2007 " + this.$store.state.searchInput.start);
                var timeEnd = new Date("01/01/2007 " + this.$store.state.searchInput.end);
                this.$store.state.searchInput.diffTime = (timeEnd - timeStart) / 60 / 60 / 1000
                if (this.$store.state.searchInput.diffTime > 0) {
                    axios
                    .get('/search', {
                            params: {
                                date: this.$store.state.searchInput.date,
                                startingTime: this.$store.state.searchInput.start,
                                endingTime: this.$store.state.searchInput.end
                            }
                        })
                        .then((response) => {
                            this.$store.state.everythings = response.data
                            this.$store.state.searchData = this.$store.state.everythings;
                            if (this.$store.state.filterd.length != 0) {
                                var secondArr = this.$store.state.everythings;
                                var inputAdvantege = this.$store.state.filterd;
                                this.advantageFilter(secondArr, inputAdvantege);
                            }
                            if (this.$store.state.placeType != "") {
                                var thirdArr = this.$store.state.everythings;
                                var inputPlace = this.$store.state.placeType;
                                this.placeFilter(thirdArr, inputPlace);
                            }
                            if (this.$store.state.itemPrice >= 0) {
                                var thirdArr = this.$store.state.everythings;
                                var inputPrice = this.$store.state.itemPrice;
                                this.priceFilter(thirdArr, inputPrice);
                            }
                            if (this.$store.state.searchInput.input != '') {
                                var fourthArr = this.$store.state.everythings;
                                var inputCity = this.$store.state.searchInput.input;
                                this.cityFilter(fourthArr, inputCity);
                            }
                            console.log(this.$store.state.everythings)
                        })
                }else{
                    this.$store.state.searchInput.diffTime = 0
                    alert('time is not valid. Pls enter valid time')
                }
            } else if (this.$store.state.searchInput.input != '') {
                console.log(this.$store.state.everythings)
                var fourthArr = this.$store.state.first;
                var inputCity = this.$store.state.searchInput.input;
                this.cityFilter(fourthArr, inputCity);
                if (this.$store.state.filterd.length != 0) {
                    var secondArr = this.$store.state.everythings;
                    var inputAdvantege = this.$store.state.filterd;
                    this.advantageFilter(secondArr, inputAdvantege);
                }
                if (this.$store.state.placeType != "") {
                    var thirdArr = this.$store.state.everythings;
                    var inputPlace = this.$store.state.placeType;
                    this.placeFilter(thirdArr, inputPlace);
                }
                if (this.$store.state.itemPrice >= 0) {
                    var thirdArr = this.$store.state.everythings;
                    var inputPrice = this.$store.state.itemPrice;
                    this.priceFilter(thirdArr, inputPrice);
                }
            }

        },
        //start
        advantageFilter(arr, val) {
            //ADVANTAGE FILTER FUNCTION
            for (let index = 0; index < val.length; index++) {
                if (index != 0) {
                    arr = this.$store.state.everythings;
                }
                if (val[index] == "wifi") {
                    var newAdvantageArray = arr.filter(function (ele) {
                        return ele.wifi == 1;
                    });
                }
                if (val[index] == "coffee") {
                    var newAdvantageArray = arr.filter(function (ele) {
                        return ele.coffee == 1;
                    });
                }
                if (val[index] == "wc") {
                    var newAdvantageArray = arr.filter(function (ele) {
                        return ele.wc == 1;
                    });
                }
                if (val[index] == "power") {
                    var newAdvantageArray = arr.filter(function (ele) {
                        return ele.power == 1;
                    });
                }
                if (val[index] == "parking") {
                    var newAdvantageArray = arr.filter(function (ele) {
                        return ele.parking == 1;
                    });
                }
                this.$store.state.everythings = newAdvantageArray;
            }
        },
        placeFilter(arr, val) {
            //PLACE TYPE FILTER FUNCTION
            var newPlaceArray = arr.filter(function (ele) {
                return ele.place_type == val;
            });
            this.$store.state.everythings = newPlaceArray;
        },
        priceFilter(arr, val) {
            //PRICE FILTER FUNCTION
            var newPriceArray = arr.filter(function (ele) {
                return ele.price <= val;
            });
            this.$store.state.everythings = newPriceArray;
        },
        cityFilter(arr, val) {
            //PRICE FILTER FUNCTION
            var newCityArray = arr.filter(function (ele) {
                var city = ele.locality
                val = val.toLowerCase();
                val = val.charAt(0).toUpperCase() + val.slice(1);
                return city == val
            });
            this.$store.state.everythings = newCityArray;
        },
        //end
        openLogin() {
            console.log(this.interception)
            this.interception = true
            console.log(this.interception)
        },
        onClickChild(value) {
            this.interception = value
            console.log(value) // someValue
        },
        openSignup() {
            this.inscription = true
        },
        onClickSignup(value) {
            this.inscription = value
            console.log(value) // someValue
        },
    },
    data() {
        this.$store.state.everythings.forEach((espace) => {
            console.log(espace);
            this.locality.push(espace.locality);
        });
        return this.locality.sort();

    },
    components: {
        Filter,
        Login,
        Signup
    },
};
</script>

<style scoped>
.headerContens {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-flow: column;
}

.button-element {
    display: flex;
    flex-grow: 2;
    margin: 10px 0 0 6px;
    flex-direction: column;
    padding-right: 0.3rem;

    border-right: 0 none;
}

.container {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}

.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
}

.bg-white {
    height: 120px;
    /* border-bottom: 1px solid rgba(10, 10, 10, 0.1); */
}

.image {
    width: 100px;
    grid-column: span 2;
}

.product-search {
    width: 100%;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 60px;
    cursor: pointer;
    height: 49px;
    border: 0.5px solid;
    /* flex-flow: column; */
}

.main-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.search-content {
    height: 70%;
}

.button-search {
    align-items: center;
    margin-left: 20px;
    margin-right: 5px;
    border-radius: 90px;
    margin-top: 0px;
}

.filter {
    margin-top: 30px;
    height: 40px;
    width: 100%;
}

.search-element {
    display: flex;
    flex-grow: 2;
    margin: 10px 0 0 6px;
    flex-direction: column;
}

.menu-connexion {
    height: 40px;
    width: 90px;
    border-radius: 60px;
    border: 1px solid;
    align-items: center;
    display: flex;
    flex-direction: row;
}

.button-content {
    grid-column: span 2;
    height: 70%;
    /* padding-left: 140px; */
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
}

.toggle {
    display: none;
}

.container-right {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}
input[type="text"], input[type="date"] {border: none;}
input[type="text"],input[type="date"]:focus{
    border: none !important;
    outline: none;
}
input[type="text"]{
    width: 140px;
    margin-bottom: 15px;
    margin-left: 20px;
    font-size: 20px;
}
</style>
