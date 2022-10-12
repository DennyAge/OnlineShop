<template>
  <v-card
      height="800"
      width="256"
  >
    <v-navigation-drawer
        class="indigo"
        dark
        id="menu"
    >
      <v-list class="mt-10 ml-10">
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
            router :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  name: 'navigation',
  components: {},
  props: {},
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Products', icon: 'mdi-shopping-outline', link: '/products' },
        { title: 'Admin Tools', icon: 'mdi-card-account-details-outline', link: '/admin-tools' },
        { title: 'Users', icon: 'mdi-account-group-outline', link: '/users' },
        { title: 'Basket', icon: 'mdi-cart-variant', link: '/basket' },
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
    }
  },
  computed: {},
  methods: {},
  mounted() {
  }
}
</script>

<style scoped>
  #menu {
    border-radius: 0;
  }
</style>
