<template>
  <v-app>
    <div>
      <Navbar/>
      <router-view/>
    </div>
  </v-app>
</template>

<script>


import Navbar from '@/components/Navbar';
import {mapActions} from 'vuex';
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['fetchDevices', 'fetchTypes', 'fetchBrands']),
  },

  async mounted() {
    this.fetchDevices()
    this.fetchTypes()
    this.fetchBrands()
  },
};
</script>
