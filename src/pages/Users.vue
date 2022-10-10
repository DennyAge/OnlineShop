<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5 mr-5" >
      <v-data-table
          :headers="headers"
          :items="getUsers"
          :items-per-page="All"
          class="elevation-1"
      ></v-data-table>
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapActions, mapGetters} from 'vuex';
export default {
  data() {
    return {
      headers: [
        { text: 'User Name', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'First Name', value: 'name.firstname' },
        { text: 'Last Name', value: 'name.lastname' },
        { text: 'City', value: 'address.city' },
        { text: 'Phone', value: 'phone' },
      ],
    }
  },
  components: {Menu},
  computed: mapGetters(['getUsers']),
  methods: mapActions(['fetchUsers']),
  async mounted() {
    this.fetchUsers()
  },
};
</script>

<style scoped>
  .table {
  }
</style>
