
<template>
  <v-container>
    <v-card
        class="mx-auto mt-16 form"
        max-width="500"

    >
      <v-form>
        <h1 class="mb-5">Login</h1>
        <v-container>
          <v-text-field
              v-model="email"
              label="Email"
              type="email"
              outlined
              clearable
          />
          <v-text-field
              v-model="password"
              label="Password"
              type="password"
              outlined
              clearable
          />
        </v-container>
        <div class="d-flex justify-space-between">
          <div>Don't have account? <router-link class="link" to="/registration">Registration</router-link></div>
          <v-btn class="btn" outlined color="green" type="submit" @click.prevent="store">Login</v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import {$host} from '@/http';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  mounted() {
  },
  computed: mapGetters(['getAuth']),
  methods: {
    ...mapActions(['setAuth']),
    async  store() {
      await $host.post('api/user/login', {email: this.email, password: this.password})
                 .then(res => {
                   localStorage.setItem('access_token', res.data.token)
                   this.setAuth(true)
                   localStorage.setItem('isAuth', true)
                   window.location.href = '/';
                 })
    }
  }
};
</script>


<style scoped>
.form {
  margin: 250px auto!important;
  padding: 25px;
}
.col-12 {
  padding: 0;
}
.link {
  text-decoration: none;
}
</style>
