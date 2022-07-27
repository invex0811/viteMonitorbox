<template>
  <v-navigation-drawer
    bottom
    color="#111827"
    v-model="$store.state.show"
    temporary

  >
    <router-link to="/" class="text-decoration-none" @click="$store.state.titleToolBar = 'Home'">
      <div class="ma-4 text-h5 text-white">MONITORBOX</div>
    </router-link>
    <v-list
      density="compact"
      class="text-subtitle-2 ma-2 bg-transparent"
    >
      <router-link
        class="text-decoration-none text-white"
        v-for="({icon,title,value,link}, i ) in $store.state.menu"
        :to="link"
        :key="i"
        @click="$store.state.titleToolBar = title"
      >
        <v-list-item
          :title="title"
          :value="value"
          active-color="#2196f3"
          class="v-icon--size-large mb-1"
          rounded="lg"

        >
          <v-icon :icon="icon" />
        </v-list-item>
      </router-link>
    </v-list>



  </v-navigation-drawer>

</template>

<script>
export default {
  name: 'BarMenu',

  data: () => ({

  }),
  methods:{

  }
}
</script>

<style scoped>

</style>
