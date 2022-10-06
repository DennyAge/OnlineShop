<template>
  <v-card>
    <v-tabs
        background-color="indigo"
        dark
        class="border"
    >
      <v-tab
          v-for="brand in getBrads"
          :key="brand.id"
          class="border"
      >
        {{ brand.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items class="box">
      <DevicesList
      @showArticle.sendId
      />
    </v-tabs-items>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
import DevicesList from '@/components/ShopPage/DevicesList';
export default {
  components: {DevicesList},
  computed: mapGetters(['getBrads']),
  methods: {
    showArticle(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
  .box {
    padding: 20px;
  }
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }
</style>
