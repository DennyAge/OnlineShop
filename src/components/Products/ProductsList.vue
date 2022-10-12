<template>
         <v-col md="3">
             <v-img
                 :src="`http://localhost:3000/${products.img}`"
                 height="350"
                 class="device-cart"
                 @click="goToDeviceInfo(products.id)"
             />
            <div class="d-flex justify-space-between mt-2">
             <div class="brand-name">
               Samsung...
             </div>
             <div>
               {{products.rating}}
               <v-icon>mdi-star-outline</v-icon>
             </div>
           </div>
           <div class="d-flex justify-space-between align-center mt-2" >
             {{products.name}}
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
import {mapActions} from 'vuex';

export default {
  name: 'product-list',
  components: {},
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
    ...mapActions(['fetchOneDevice']),
    addToBasket() {
      this.$emit('addToBasket', this.products)
    },

    goToDeviceInfo(id) {
      this.fetchOneDevice(id)
      this.$router.push(`device/${id}`)
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
  .brand-name {
    color: grey;
  }
  .device-cart {
    cursor: pointer;
  }

</style>
