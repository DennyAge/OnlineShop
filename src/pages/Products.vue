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
                    @click="sortedProducts = sortedBrandProducts = allProducts"
                >
                  All
                </v-list-item>
                <v-list-item
                    v-for="brand in getBrands"
                    :key="brand.id"
                    @click="sortByBrands(brand)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="brand.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col md="10" cols="12">
          <v-card>
            <v-btn
                v-for="(types, i) in allTypes"
                :key="types.id"
                class="mt-7 ml-7"
                @click="sortByTypes(types)"
                outlined
            >
              {{ types.name}}
            </v-btn>
<!--            <v-tabs-->
<!--                background-color="indigo"-->
<!--                dark-->
<!--                @change="selectedTab"-->
<!--            >-->
<!--              <v-tab-->
<!--                  v-for="(types, i) in allTypes"-->
<!--                  :key="types.id"-->
<!--                  class="mr-5"-->
<!--                  @click="sortByTypes(types)"-->
<!--              >-->
<!--                {{ types.name}}-->
<!--              </v-tab>-->
<!--              <v-spacer/>-->
<!--            </v-tabs>-->
<!--            <v-tabs-items >-->
<!--              &lt;!&ndash;          <PriceSlider/>&ndash;&gt;-->
<!--              <v-row class="list">-->
<!--                <ProductsList-->
<!--                    v-for="product in sortedProducts"-->
<!--                    :key="product.id"-->
<!--                    v-bind:products="product"-->
<!--                    @addToBasket="addToBasket"-->
<!--                    v-if="sortedBrandProducts.length"-->
<!--                />-->
<!--                <ProductsList-->
<!--                    v-for="product in allProducts"-->
<!--                    :key="product.id"-->
<!--                    v-bind:products="product"-->
<!--                    @addToBasket="addToBasket"-->
<!--                    v-if="!sortedProducts.length"-->
<!--                />-->
<!--                <ProductsList-->
<!--                    v-for="product in sortedBrandProducts"-->
<!--                    :key="product.id"-->
<!--                    v-bind:products="product"-->
<!--                    @addToBasket="addToBasket"-->
<!--                    v-if="!sortedBrandProducts.length"-->
<!--                />-->
<!--              </v-row>-->
<!--              <v-snackbar-->
<!--                  v-model="snackbar"-->
<!--                  :multi-line="multiLine"-->
<!--                  color="indigo"-->
<!--              >-->
<!--                Product add to Basket-->

<!--                <template v-slot:action="{ attrs }">-->
<!--                  <v-btn-->
<!--                      color="red"-->
<!--                      text-->
<!--                      v-bind="attrs"-->
<!--                      @click="snackbar = false"-->
<!--                  >-->
<!--                    Close-->
<!--                  </v-btn>-->
<!--                </template>-->
<!--              </v-snackbar>-->
<!--            </v-tabs-items>-->
            <v-row class="list">
              <ProductsList
                  v-for="product in sortedProducts"
                  :key="product.id"
                  v-bind:products="product"
                  @addToBasket="addToBasket"
                  v-if="sortedBrandProducts.length"
              />
              <ProductsList
                  v-for="product in allProducts"
                  :key="product.id"
                  v-bind:products="product"
                  @addToBasket="addToBasket"
                  v-if="!sortedProducts.length"
              />
              <ProductsList
                  v-for="product in sortedBrandProducts"
                  :key="product.id"
                  v-bind:products="product"
                  @addToBasket="addToBasket"
                  v-if="!sortedBrandProducts.length"
              />
            </v-row>
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
          </v-card>
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
import TypeList from '@/components/Products/TypeList';
export default {
  name: 'products',
  data: () => ({
    selectedItem: 0,
    selectedBtnItem: '',
    sortedProducts: [],
    sortedBrandProducts: [],
    multiLine: true,
    snackbar: false,
  }),
  computed: mapGetters(['allProducts', 'allTypes', 'getBrands']),

  methods: {
    ...mapActions(['addProductToBasket']),
    addToBasket(data) {
      this.addProductToBasket(data)
      this.snackbar = true
    },
    sortByBrands(type) {
      this.sortedProducts = []
      let vm = this
      this.allProducts.map((item) => {
        if (item.typeId === type.id) {
          vm.sortedProducts.push(item)
        }
      })
    },
    sortByTypes(brand, i) {
      this.selectedBtnItem = i
      this.sortedBrandProducts = []
      let vm = this
      this.sortedProducts.map((item) => {
        if (item.brandId === brand.id) {
          vm.sortedBrandProducts.push(item)
        }
      })
    },
    selectedTab (e) {
      console.log(e);
    }
  },
  components: {TypeList, PriceSlider, ProductsList, Menu},
  async mounted() {

  },
};
</script>

<style scoped>
  .list {
    padding: 50px;
  }

</style>
