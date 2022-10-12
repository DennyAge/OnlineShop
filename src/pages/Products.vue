<template >
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container  class="mt-5 ml-5 mr-5">
      <v-row>
        <v-col md="2" cols="12">
          <v-card
          >
            <v-list rounded>
              <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
              >
                <v-list-item
                    v-for="(types) in getTypes"
                    :key="types.id"
                    @click="sortByTypes(types)"
                    active-class="type.id"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="types.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col md="10" cols="12">
          <v-row class="mt-1" >
            <v-card
                v-for="brand in getBrands"
                :key="brand.id"
                @click="sortByBrands(brand)"
                class="ml-5 pa-3 d-flex justify-center"
                width="100"
                height="40"
            >
              {{ brand.name}}
            </v-card>
          </v-row>
          <v-row class="list">
            <ProductsList
                v-if="sort === 0"
                v-for="product in getDevices"
                :key="product.id"
                v-bind:products="product"
                @addToBasket="addToBasket"
            />
            <ProductsList
                v-if="sort === 1"
                v-for="product in sortedByType"
                :key="product.id"
                v-bind:products="product"
                @addToBasket="addToBasket"
            />
            <ProductsList v-if="sort === 2"
                v-for="product in sortedVyBrand"
                :key="product.id"
                v-bind:products="product"
                @addToBasket="addToBasket"
            />
          </v-row>
          <div class="text-center mt-5">
            <v-pagination
                v-model="page"
                :length="4"
                circle
            ></v-pagination>
          </div>
          <v-snackbar
              v-model="snackbar"
              :multi-line="multiLine"
              color="indigo"
          >
            Product add to Basket

            <template v-slot:action="{ attrs }">
              <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapGetters, mapActions} from 'vuex'
import ProductsList from '@/components/Products/ProductsList';
import PriceSlider from '@/components/Products/PriceSlider';
export default {
  name: 'products-page',
  components: {PriceSlider, ProductsList, Menu},
  data: () => ({
    selectedItem: '',
    sortedByType: [],
    sortedVyBrand: [],
    multiLine: true,
    snackbar: false,
    sort: 0,
    page: 1,
  }),
  computed: mapGetters(['getDevices', 'getTypes', 'getBrands']),
  methods: {
    ...mapActions(['addProductToBasket', 'fetchDevices', 'selectedType', 'selectedBrand']),
    addToBasket(data) {
      this.addProductToBasket(data)
      this.snackbar = true
    },

    sortByTypes(type) {
      this.selectedType(type)
      this.sortedByType = []
      this.sort = 1
      let vm = this
      this.getDevices.map((item) => {
        if (item.typeId === type.id) {
          vm.sortedByType.push(item)
        }
      })
    },
    sortByBrands(brand) {
      this.selectedBrand(brand)
      this.sortedVyBrand = []
      this.sort = 2
      let vm = this
      this.sortedByType.map((item) => {
        if (item.brandId === brand.id) {
          vm.sortedVyBrand.push(item)
        }
      })
    },
  },
  async mounted() {
    this.fetchDevices(12)
  },
};
</script>

<style scoped>
  .list {
    padding: 50px;
  }

</style>
