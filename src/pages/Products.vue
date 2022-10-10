<template >
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container  class="mt-5 ml-5 mr-5">
      <v-card>
        <v-tabs
            background-color="indigo"
            dark
        >
          <v-tab @click="sortedProducts = allProducts">All</v-tab>
          <v-tab
              v-for="(categories, i) in allCategories"
              :key="categories.i"
              class="mr-5"
              @click="sortByCategories(categories)"
          >
            {{ categories}}
          </v-tab>
          <v-spacer/>
           <v-btn class="add-btn" outlined @click="openModal"><v-icon>mdi-plus</v-icon></v-btn>
        </v-tabs>
        <v-tabs-items >
          <PriceSlider/>
          <v-row class="list">
            <ProductsList
                v-for="product in sortedProducts"
                :key="product.id"
                v-bind:products="product"
                @addToBasket="addToBasket"
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
        </v-tabs-items>
      </v-card>
    </v-container>
    <AddProduct
        :dialog-visible="dialogVisible"
    />
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapGetters, mapActions} from 'vuex'
import ProductsList from '@/components/Products/ProductsList';
import AddProduct from '@/components/Products/AddProduct';
import PriceSlider from '@/components/Products/PriceSlider';
export default {
  name: 'products',
  data: () => ({
    dialogVisible: false,
    sortedProducts: [],
    multiLine: true,
    snackbar: false,
  }),
  computed: mapGetters(['allProducts', 'allCategories']),

  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories', 'addProductToBasket']),
    addToBasket(data) {
      this.addProductToBasket(data)
      this.snackbar = true
    },
    openModal() {
      this.dialogVisible = true
    },
    sortByCategories(category) {
      console.log(category);
      this.sortedProducts = []
      let vm = this
      this.allProducts.map((item) => {
        if (item.category === category) {
          vm.sortedProducts.push(item)
        }
      })
    }
  },
  components: {PriceSlider, AddProduct, ProductsList, Menu},
  async mounted() {
    this.fetchProducts()
    this.fetchCategories()
  },
};
</script>

<style scoped>
  .list {
    padding: 50px;
  }
  .add-btn {
    margin-top: 6px;
    margin-right: 20px;
  }
</style>
