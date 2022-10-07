<template>
  <v-dialog
      v-model="dialogVisible"
      max-width="800"
  >
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
                v-model="form.title"
                :rules="rules.name"
                color="purple darken-2"
                label="Product name"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-text-field
                v-model="form.price"
                :rules="rules.name"
                color="blue darken-2"
                label="Price"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-text-field
                v-model="form.description"
                :rules="rules.name"
                color="blue darken-2"
                label="Description"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              sm="12"
          >
            <v-text-field
                v-model="form.image"
                :rules="rules.name"
                color="blue darken-2"
                label="Image"
                required
            ></v-text-field>
          </v-col>
<!--          <v-col-->
<!--              cols="12"-->
<!--              sm="12"-->
<!--          >-->
<!--            <v-file-input-->
<!--                v-model="form.image"-->
<!--                :rules="rules.name"-->
<!--                color="blue darken-2"-->
<!--                label="Image"-->
<!--                required-->
<!--            ></v-file-input>-->
<!--          </v-col>-->
          <v-col
              cols="12"
              sm="12"
          >
            <v-select
                v-model="form.category"
                :items="allCategories"
                :rules="rules.category"
                color="pink"
                label="Category"
                required
            ></v-select>
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
    </v-form>
  </v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
  },
  data: () => {
    const defaultForm = Object.freeze({
       title: '',
       price: '',
       description: '',
       image: 'https://i.pravatar.cc',
       category: ''
    })
    return {
      form: Object.assign({}, defaultForm),
      rules: {
        title: [val => val < 10 || `I don't believe you!`,],
        price: [val => (val || '').length > 0 || 'This field is required'],
        description: [val => (val || '').length > 0 || 'This field is required'],
        image: [val => (val || '').length > 0 || 'This field is required'],
        category: [val => (val || '').length > 0 || 'This field is required'],
      },
      animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
      defaultForm
    }
  },
  computed: {
    ...mapGetters(['allCategories']),
    formIsValid() {
      return (
          this.form.title &&
          this.form.price &&
          this.form.description &&
          this.form.image &&
          this.form.category

      )
    }
  },
  methods: {
    ...mapMutations(['addProducts', 'fetchCategories']),
    submit () {
      this.resetForm()
      this.createNewProducts({
        title: this.title,
        price: this.price,
        description: this.description,
        image: this.image,
        category: this.category
      }
      )
      this.dialogVisible = false
    },
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
      this.dialogVisible = false
    }
  },
};
</script>

<style scoped>
  .modal {
    background-color: white;
    padding: 100px;
  }
</style>
