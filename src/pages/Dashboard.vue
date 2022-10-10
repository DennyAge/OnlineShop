<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5">
      <PostForm/>
      <h1>{{postsCount}}</h1>
      <div v-for="post in validPosts" :key="post.id">
        <h1>{{post.title}}</h1>
        <span>{{post.body}}</span>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import {mapGetters, mapActions} from 'vuex'
import PostForm from '@/components/PostForm';
export default {
  computed: {
    ...mapGetters(['validPosts', 'postsCount']),
  },
  methods: mapActions(['fetchPosts']),
  async mounted() {
   this.fetchPosts(9)
  },
  components: {PostForm, Menu}
};
</script>

<style scoped>

</style>
