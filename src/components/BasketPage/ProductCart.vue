<template>
  <v-row class="pl-10 pt-10">
    <CartItem
      v-for="(item, index) in product_data"
      :key="index"
      :item_data="item"
      @deleteFromBasket="deleteFromBasket(index)"
    />
  </v-row>
</template>

<script>
import CartItem from '@/components/BasketPage/CartItem';
import {mapActions} from 'vuex';
export default {
  name: 'product-cart',
  components: {CartItem},
  props: {
    product_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions(['deleteProductFromBasket']),
    deleteFromBasket(index) {
      this.deleteProductFromBasket(index)
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1)
  }
};
</script>

<style scoped>

</style>
