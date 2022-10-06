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
            v-for="item in items"
            :key="item.title"
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
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard' },
        { title: 'Shop', icon: 'mdi-shopping-outline', link: '/shop' },
        { title: 'Devices', icon: 'mdi-devices', link: '/devices' },
        { title: 'Basket', icon: 'mdi-cart-variant', link: '/basket' },
      ],
    }
  },
}
</script>

<style scoped>
  #menu {
    border-radius: 0;
  }
</style>
