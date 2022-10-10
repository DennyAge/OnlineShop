<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5">
      Cart
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapActions, mapGetters} from 'vuex';
export default {
  components: {Menu},
  computed: mapGetters(['getCarts']),
  methods: mapActions(['fetchCarts']),
  async mounted() {
    this.fetchCarts()
  },
};
</script>


<style scoped>

</style>
