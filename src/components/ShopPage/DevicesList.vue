<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
            v-for="device in getDevices"
            :key="device.id"
            cols="9"
            md="3"
        >
          <v-item v-slot="{ active, toggle }">
              <v-img
                  :src="`https://cdn.vuetifyjs.com/images/${device.img}`"
                  height="250"

                  @click="toggle"
              >
              <div></div>
              <v-scroll-y-transition>
                <div
                    v-if="active"
                    class="text-h4 text-center mt-16"
                >
              <div>Price: {{device.price}}</div>
                  <br>
              <v-btn
                  outlined
                  @click="goToDetails"
                  class=" mr-5"
              >
                <v-icon>{{'mdi-card-account-details'}} </v-icon>
              </v-btn>
              <v-btn
                  outlined
                  @click="addToBasket"
              >
                <v-icon>{{'mdi-cart-variant'}}</v-icon>
              </v-btn>
                </div>
              </v-scroll-y-transition>
              </v-img>
          </v-item>
          <div class="d-flex justify-space-between">
            <div class="brand-name">
              Samsung...
            </div>
            <div>
              {{device.rating}}
              <v-icon>{{'mdi-star-outline'}}</v-icon>
            </div>
          </div>
          <div>
            {{device.name}}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters(['getDevices']),
  methods: {
    addToBasket() {
      console.log('add to basket');
    },
    goToDetails() {
      console.log('Details');
    }
  }
};
</script>

<style scoped>
  .brand-name {
    color: grey;
  }
  .link {
    text-decoration: none;
  }
</style>
