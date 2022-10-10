<template>
  <v-row class="pl-10 pt-10">
    <CartItem
      v-for="(item, index) in product_data"
      :key="item.id"
      :item_data="item"
      @deleteFromBasket="deleteFromBasket(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
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
  computed: {
  },
  methods: {
    ...mapActions([
        'deleteProductFromBasket',
        'incrementProductItem',
        'decrementProductItem'
                  ]),
    deleteFromBasket(index) {
      this.deleteProductFromBasket(index)
    },
    increment(index) {
      this.incrementProductItem(index)
    },
    decrement(index) {
      this.decrementProductItem(index)
    }
  },
  mounted() {
    // this.$set(this.product_data, 'quantity', 1)
  }
};
</script>

<style scoped>

</style>
