<template>
  <v-card
      max-width="200"
  >
    <v-list>
      <v-list-item-group>
        <v-list-item
            v-for="(types, i) in getTypes"
            :key="i"

        >
          <v-list-item-icon>
            <v-icon>{{types.img}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="types.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  computed: mapGetters(['getTypes']),
};
</script>

<style scoped>

</style>
