<template>
  <v-container fluid class="d-flex">
    <Menu/>
    <v-container class="mt-5 ml-5 mr-5">
      <v-card>
        <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            dark
            icons-and-text
            @change="tabSelected"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Add Device
            <v-icon>mdi-devices</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Add Brand
            <v-icon>mdi-star-circle-outline</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Add Type
            <v-icon>mdi-folder-account-outline</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="content">
          <v-tab-item
              v-for="i in 3"
              :key="i"
              :value="'tab-' + i"
          >
            <AddDeviceForm v-if="tab === 'tab-1'"/>
            <AddBrandForm v-if="tab === 'tab-2' "/>
            <AddTypeForm v-if="tab === 'tab-3' "/>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu';
import AddDeviceForm from '@/components/Forms/AddDeviceForm';
import AddBrandForm from '@/components/Forms/AddBrandForm';
import AddTypeForm from '@/components/Forms/AddTypeForm';
export default {
  name: 'admin-page',
  components: {AddTypeForm, AddBrandForm, AddDeviceForm, Menu},
  data () {
    return {
      tab: null,
    }
  },
  computed: {
    tabSelected (e) {
      this.tab = e.tab
    }
  },
  methods: {
  },
  async mounted() {
  },
};
</script>


<style scoped>
.content {
  min-height: 707px;
}
</style>
