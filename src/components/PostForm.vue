<template>
    <form @submit.prevent="submit" class="row">
      <v-text-field class="ml-3" v-model="title"/>
      <v-text-field class="ml-3" v-model="body"/>
      <v-btn type="submit" color="green" class="ml-5" >Create Post</v-btn>
    </form>
</template>

<script>
import{ mapMutations } from 'vuex'
export default {
  name: 'post-form',
  components: {},
  props: {},
  data: () => ({
    title: '',
    body: ''
  }),
  computed: {},
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now
      })
      this.title = this.body = ''
    }
  },
  mounted() {
  }
};
</script>

<style scoped>
  .row {
    width: 850px;
    padding: 50px 0;
  }
</style>
