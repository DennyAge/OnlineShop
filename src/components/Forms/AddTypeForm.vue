<template>
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
              label="Type name"
              required
          ></v-text-field>
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
        Add Type
      </v-btn>
    </v-card-actions>
    <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
        color="indigo"
    >
      Type add

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

</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {$host} from '@/http';

export default {
  name: 'add-type',
  components: {},
  props: {
  },
  data: () => {
    return {
      name: '',
      multiLine: true,
      snackbar: false,
    }
  },
  computed: {
    ...mapGetters(),

    formIsValid() {
      return (
          this.name

      )
    }
  },
  methods: {
    ...mapMutations(),

    async submit () {
      await $host.post('api/type',  {
        name: this.name,
      }, )
                 .then((res) => {
                   console.log(res);
                   this.snackbar = true
                   this.resetForm()
                 })
    },
    resetForm() {
      this.$refs.form.reset()
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
  .modal {
    background-color: white;
    padding: 100px;
    max-width:50%;
  }
</style>
