<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5">
      <v-row>
        <v-col md="2">
          <TypeBar
          />
        </v-col>
        <v-col md="9">
          <BrandBar
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import TypeBar from '@/components/ShopPage/TypeBar';
import BrandBar from '@/components/ShopPage/BrandBar';
import {mapGetters} from 'vuex'
export default {
  name: 'shop-catalog',
  components: {BrandBar, TypeBar, Menu},
  props: {},
  computed: mapGetters(['']),

};
</script>

<style scoped>

</style>
