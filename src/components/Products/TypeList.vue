<template>
  <v-card
  >
    <v-navigation-drawer
        class="white"
        id="menu"
    >
      <v-list >
        <v-list-item
            v-for="item in getBrands"
            :key="item.id"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
  data () {
    return {

    }
  },
  computed: mapGetters(['getBrands']),
}
</script>

<style scoped>
#menu {
  border-radius: 0;
}
</style>
