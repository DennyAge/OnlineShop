<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5 mr-5">
      <v-row class="mt-5 ml-5 mr-5">
        <v-col md="4">
          <v-img
              :src="`http://localhost:3000/${getOneDevice.img}`"
              width="300"
              height="300"
          ></v-img>
        </v-col>
        <v-col md="4">
          <v-row class="flex-column align-center">
            <h2>{{getOneDevice.name}}</h2>
            <div class="d-flex align-center justify-center rating">
              {{getOneDevice.rating}}
            </div>
          </v-row>
        </v-col>
        <v-col md="4">
          <v-card
            width="300"
            height="300"
            class="d-flex flex-column align-center justify-space-around"
          >
            <h3>{{getOneDevice.price}} $</h3>
            <v-btn outlined color="blue">Add to Basket</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column mt-15 ml-5 mr-5">
        <h1>Descriptions:</h1>
        <v-col
            md="3"
            v-for="(info) in description"
            :key="info.id"
            class=""
        >
          {{info.name}}: {{info.description}}
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapGetters} from 'vuex';
export default {
  name: 'device-page',
  components: {Menu},
  data() {
    return {
      description: [
        {id: 1, name: 'RAM', description: '5 Gb'},
        {id: 2, name: 'Camera', description: '32 Mp'},
        {id: 3, name: 'Processor', description: 'i5'},
        {id: 4, name: 'Battery', description: '5000'},
        {id: 5, name: 'Core', description: 'A61'}
      ],
    }
  },
  computed: mapGetters(['getOneDevice']),
  methods: {

  },
  mounted() {
  },

};
</script>

<style scoped>
  .rating {
    background: url('../assets/big-star.png') no-repeat center center;
    background-size: cover;
    width: 250px;
    height: 240px;
    font-size: 24px;
    font-weight: 700;
  }
</style>
