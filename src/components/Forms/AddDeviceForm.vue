<template>
  <div class="d-flex justify-space-between">
    <v-form
        class="modal"
        ref="form"
        @submit.prevent="submit"
    >
      <v-container fluid>
        <v-row>
          <v-col
              cols="12"
              sm="12"
          >
            <v-text-field
                v-model="name"
                color="blue darken-2"
                label="Product name"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-text-field
                v-model="price"
                color="blue darken-2"
                label="Price"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-select
                v-model="brand"
                :items="getBrands"
                item-text="name"
                item-value="id"
                color="blue darken-2"
                label="Brands"
            ></v-select>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-select
                v-model="type"
                :items="allTypes"
                item-text="name"
                item-value="id"
                color="blue darken-2"
                label="Type"

            ></v-select>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-file-input
                color="blue darken-2"
                label="Image"
                show-size
                @change="onFileSelected"
                type="file"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
            text
            @click="resetForm"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            :disabled="!formIsValid"
            text
            color="primary"
            type="submit"
        >
          Add Product
        </v-btn>
      </v-card-actions>
      <v-snackbar
          v-model="snackbar"
          :multi-line="multiLine"
          color="indigo"
      >
        Device add

        <template v-slot:action="{ attrs }">
          <v-btn
              color="red"
              text
              v-bind="attrs"
              @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-form>
    <div
        class="prevImage"
    >
      <v-img
          :src="previewFilePath"
          v-if="file"
      />
    </div>
  </div>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {$host} from '@/http';

export default {
  props: {
  },
  data: () => {
    return {
      name: '',
      price: '',
      brand: '',
      file: null,
      type: '',
      multiLine: true,
      snackbar: false,
    }
  },
  computed: {
    ...mapGetters(['allTypes', 'getBrands']),
    previewFilePath () {
      if (this.file) {
        return URL.createObjectURL(this.file)
      }
      return '#'
    },
    formIsValid() {
      return (
          this.name &&
          this.price &&
          this.brand &&
          this.type &&
          this.file

      )
    }
  },
  methods: {
    ...mapMutations(['addProducts', 'fetchCategories', 'fetchBrands']),
    onFileSelected (file) {
      console.log(file);
      this.file = file
    },
    async submit () {
      await $host.post('api/device',  {
        name: this.name,
        price: this.price,
        brandId: this.brand,
        typeId: this.type,
        img: this.file,
      }, {
                         headers: {
                           'Content-Type': 'multipart/form-data'
                         }
                       })
                 .then(res => {
                   this.snackbar = true
                   this.resetForm()
                 })
    },
    resetForm() {
      this.$refs.form.reset()
    }
  },
};
</script>

<style scoped>
.modal {
  background-color: white;
  padding: 100px;
  max-width:50%;
}
.prevImage {
  margin: 0 auto;
  width: 50%;
}
</style>
