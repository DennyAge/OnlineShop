
<template>
  <v-container>
    <v-card
        class="mx-auto mt-16 form"
        max-width="500"

    >
      <v-form>
        <h1 class="mb-5">Registration</h1>
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
<!--          <v-text-field-->
<!--              v-model="password_confirmation"-->
<!--              label="Confirm Password"-->
<!--              type="password"-->
<!--              outlined-->
<!--              clearable-->
<!--          />-->
        </v-container>
        <div class="d-flex justify-space-between">
          <div>Have account? <router-link class="link" to="/login">Login</router-link></div>
          <v-btn class="btn" outlined color="green" type="submit" @click.prevent="store">Registration</v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import {$host} from '@/http';

export default {
  name: 'registration',
  data() {
    return {
      email: null,
      password: null,
      // password_confirmation: null
    }
  },
  mounted() {
  },
  methods: {
  async  store() {
    await $host.post('api/user/registration', {email: this.email, password: this.password})
           .then(res => {
             console.log(res);
             this.$router.push('/login');
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
