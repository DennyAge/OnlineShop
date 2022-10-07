<template>
         <v-col md="4">
             <v-img
                 :src="`${products.image}`"
                 height="300"
             />
            <div class="d-flex justify-space-between mt-2">
             <div class="brand-name">
               {{products.category}}
             </div>
             <div>
               {{products.rating.rate}}
               <v-icon>mdi-star-outline</v-icon>
             </div>
           </div>
           <div class="d-flex justify-space-between align-center mt-2">
             {{products.title}}
            <v-btn
                outlined
                @click="addToBasket"
            >
              <v-icon>mdi-cart-variant</v-icon>
            </v-btn>
           </div>
         </v-col>
</template>

<script>
import{ mapMutations } from 'vuex'
export default {
  props: {
    products : {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    addToBasket() {
      this.$emit('addToBasket', this.products)
    }
  }
};
</script>

<style scoped>
.brand-name {
  color: grey;
}

</style>
