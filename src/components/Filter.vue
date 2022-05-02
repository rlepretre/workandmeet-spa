<template>
<div>
    <div class="container content">
        <div class="container-left">
            <q-btn rounded color="white" text-color="black" label="Tarif">
                <q-popup-proxy>
                    <q-banner style="width: 600px">
                        Choisissez un montant

                        <q-slider class="q-mt-xl" v-model="priceModel" color="rgb(24, 22, 121)" :inner-min="0" :inner-max="12000" label-always :label-value="priceLabel" switch-label-side switch-marker-labels-side :min="0" :max="12000" />

                        <q-btn rounded style="background: rgb(24, 22, 121); color: white" v-close-popup :priceModel="priceModel" @click="savePrice((itemClick = priceModel))">Valider</q-btn>
                    </q-banner>
                </q-popup-proxy>
            </q-btn>
            <q-btn-dropdown v-model="menu" class="q-ml-lg" outline rounded color="white" text-color="black" label="Espace">
                <q-list v-for="espace in espacesType" :key="espace">
                    <q-item clickable v-close-popup @click="placeItemFilter((itemClick = espace))">
                        <q-item-section>
                            <q-item-label>{{ espace }}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-separator spaced inset />
                </q-list>
            </q-btn-dropdown>
        </div>
        <div class="container-middle">
            <q-btn class="q-ml-lg" outline rounded color="white" text-color="black" v-model="val" v-for="(item, i) in $store.state.items" :key="item.value" :item="item" :label="item.label" :class="{ active: activeClasses[i] }" @click="
            filter((itemClick = item), item.count++, (item.checked = true))
          " />
        </div>
        <!-- <div class="container-right">
        <q-btn
          outline
          rounded
          color="white"
          text-color="black"
          icon="tune"
          label="Filtre"
        />
      </div> -->
    </div>
</div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 40px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.active {
    background: gray !important;
}

.container-left {
    grid-column: span 1;
    padding-right: 0px;
    border-right: 1px solid rgba(10, 10, 10, 0.1);
    display: flex;
    flex-direction: row;
}

.container-middle {
    grid-column: span 5;

    padding-left: 10px;
    display: flex;
    flex-direction: row;
}

.container-right {
    grid-column: span 1;
    display: flex;
    flex-direction: row;
}

button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--outline.q-btn--rectangle.q-btn--rounded.text-black.q-btn--actionable.q-focusable.q-hoverable.q-ml-lg {
    margin-left: 5px;
}
</style>

<script>
import {
    ref,
    computed
} from "vue";
import axios from "axios";

export default {
    setup() {
        const priceModel = ref(10000);
        const itemClick = "";
        return {
            count: 0,
            val: ref(false),
            menu: ref(false),
            itemClick,
            priceModel,
            priceLabel: computed(() => `$ ${priceModel.value}`),
            arrayMarkerLabel: [{
                    value: 100,
                    label: "$100"
                },
                {
                    value: 200,
                    label: "$200"
                },
                {
                    value: 300,
                    label: "$300"
                },
                {
                    value: 400,
                    label: "$400"
                },
                {
                    value: 500,
                    label: "$500"
                },
                {
                    value: 600,
                    label: "$600"
                },
                {
                    value: 700,
                    label: "$700"
                },
                {
                    value: 800,
                    label: "$800"
                },
                {
                    value: 900,
                    label: "$900"
                },
                {
                    value: 1000,
                    label: "$1000"
                },
            ],

            espacesType: [
                "Coworking",
                "Autre",
                "Bureau privé",
                "Salle de réunion",
                "Salle de séminaire",
            ],
        };
    },
    data: function () {
        return {
            count: 0,
            filterd: [],
            placeType: "",
            activeClasses: [false, false, false, false, false],
            Price: "",
        };
    },
    methods: {
        filter() {
            this.classCheck(this.itemClick.label);
            if (this.$store.state.searchData.length > 0) {
                var filterArr = this.$store.state.searchData;
            } else {
                var filterArr = this.$store.state.first;
            }
            if (this.itemClick.count == 1) {
                this.$store.state.filterd.push(this.itemClick.label);
                var inputVal = this.$store.state.filterd;
                this.advantageFilter(filterArr, inputVal);
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
            } else if (this.itemClick.count == 2) {
                this.itemClick.count = 0;
                var ind = this.$store.state.filterd.indexOf(this.itemClick.label);
                this.$store.state.filterd.splice(ind, 1);
                inputVal = this.$store.state.filterd;
                if (this.$store.state.filterd.length > 0) {
                    this.advantageFilter(filterArr, inputVal);
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
            }
        },
        placeItemFilter() {
            var inputVal = this.itemClick;
            this.$store.state.placeType = inputVal;
            if (this.$store.state.searchData.length > 0) {
                var placeArr = this.$store.state.searchData;
            } else {
                var placeArr = this.$store.state.first;
            }
            this.placeFilter(placeArr, inputVal)
            if (this.$store.state.filterd.length != 0) {
                var secondArr = this.$store.state.everythings;
                var inputAdvantege = this.$store.state.filterd;
                this.advantageFilter(secondArr, inputAdvantege);
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
        },
        savePrice() {
            if (this.$store.state.searchData.length > 0) {
                var priceArr = this.$store.state.searchData;
            } else {
                var priceArr = this.$store.state.first;
            }
            var inputVal = this.itemClick;
            this.$store.state.itemPrice = inputVal;
            this.priceFilter(priceArr, inputVal);
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
            if (this.$store.state.searchInput.input != '') {
                var fourthArr = this.$store.state.everythings;
                var inputCity = this.$store.state.searchInput.input;
                this.cityFilter(fourthArr, inputCity);
            }
        },
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
        classCheck(val) {
            if (val == "wifi") {
                this.activeClasses[0] = !this.activeClasses[0];
            }
            if (val == "power") {
                this.activeClasses[1] = !this.activeClasses[1];
            }
            if (val == "wc") {
                this.activeClasses[2] = !this.activeClasses[2];
            }
            if (val == "parking") {
                this.activeClasses[3] = !this.activeClasses[3];
            }
            if (val == "coffee") {
                this.activeClasses[4] = !this.activeClasses[4];
            }
        },
    },
};
</script>