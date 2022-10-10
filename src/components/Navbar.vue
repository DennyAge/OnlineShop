<template>
  <v-container fluid>
    <v-app-bar
        color="indigo"
        dark
    >
      <router-link class="logo" to="/">
        <div class="logo ml-10">
        Online Shop
      </div>
      </router-link>
      <v-spacer/>
      <v-btn icon>
        <v-icon >mdi-magnify</v-icon>
      </v-btn>

      <v-badge
          :content="getProduct.length"
          :value="getProduct.length"
          color="red"
          overlap
          class="mr-5 ml-2"
      >
        <v-icon   @click="goToBasket">
          mdi-cart-variant
        </v-icon>
      </v-badge>
      <v-btn v-if="!isAuth" color="deep-orange" to="/registration" class="ml-3">Registration</v-btn>
      <v-btn v-if="!isAuth" color="deep-orange" to="/login" class="ml-3">Login</v-btn>
      <v-btn v-if="isAuth" color="deep-orange" to="/login" class="ml-3" @click.prevent="logout">Logout</v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import {mapActions, mapGetters,} from 'vuex';
export default {
  computed: {
    ...mapGetters([
                    'getAuth',
                    'getProduct'
                  ])
  },
  components: {

  },
  data () {
    return {
      isAuth: localStorage.getItem('isAuth')
    }
  },
  methods: {
    ...mapActions(['setAuth']),
    goToBasket() {
      this.$router.push('/basket');
    },
    logout() {
      localStorage.clear()
      window.location.href = '/';
    }
  }
};
</script>

<style >
 .container {
   padding: 0;
 }
 .logo {
   text-decoration: none;
   font-size: 20px;
   color: #fff;
   font-weight: 700;
 }
</style>
