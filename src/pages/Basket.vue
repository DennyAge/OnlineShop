<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5">
      <ProductCart
          v-if="getProduct.length"
          :product_data="getProduct"
      />
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
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
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('Basket');
  }
};
</script>

<style scoped>

</style>
