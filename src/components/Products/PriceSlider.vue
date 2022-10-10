<template>
  <v-card
      flat
      color="transparent"
  >
    <v-subheader>Sort products by Price</v-subheader>

    <v-card-text>
      <v-row>
        <v-col class="px-4">
          <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                  :value="range[0]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  style="width: 60px"
                  @change="$set(range, 0, $event)"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                  :value="range[1]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  style="width: 60px"
                  @change="$set(range, 1, $event)"
              ></v-text-field>
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    min: 0,
    max: 1000,
    range: [0, 1000]
  }),
  methods: {

  }
};
</script>

<style scoped>

</style>
