
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
                  label="Name"
                  outlined
                  clearable
              />
              <v-text-field
                  label="Password"
                  outlined
                  clearable
              />
        </v-container>
        <div class="d-flex justify-space-between">
          <div>Don't have account? <router-link class="link" to="/registration">Registration</router-link></div>
          <v-btn class="btn" outlined color="green">Login</v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {

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
