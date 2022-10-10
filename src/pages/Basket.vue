<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5">
       <div class="d-flex">
         <v-spacer/>
         <v-card class="d-flex justify-end total">
           Total: {{productTotal}}
         </v-card>
       </div>
      <div v-if="!getProduct.length">There are no products in basket...</div>
      <ProductCart
          v-if="getProduct.length"
          :product_data="getProduct"
      />
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Menu from '@/components/Menu';

import ProductCart from '@/components/BasketPage/ProductCart';
export default {
  name: 'basket',
  components: {ProductCart, Menu},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
        'getProduct'
    ]),
    productTotal() {
      let result = []

      if (this.getProduct.length) {
        for (let item of this.getProduct) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce( (sum, el) => {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }

  },
  methods: {

  },
  watch: {},
  mounted() {
    console.log('Basket');
  }
};
</script>

<style scoped>
  .total {
    padding: 10px;
  }
</style>
