<template>
  <v-col md="4">
    <v-img
        :src="`${item_data.image}`"
        height="300"
    />
    <div class="d-flex justify-space-between mt-2">
      <div class="brand-name">
        {{item_data.category}}
      </div>
      <div>
        {{item_data.quantity}}
      </div>
    </div>
    <div class="d-flex justify-space-between align-center mt-2">
      {{item_data.title}}
      <v-btn
          outlined
          @click="deleteFromBasket"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    item_data: {
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

    deleteFromBasket() {
      this.$emit('deleteFromBasket')
    }
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>
