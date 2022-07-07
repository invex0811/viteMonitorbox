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

    <template v-slot:append>
      <v-btn color="error" block class="mb-1" @click="singOut()"> Logout </v-btn>
    </template>

  </v-navigation-drawer>

</template>

<script>
import {getAuth} from "firebase/auth";
import router from "../router";
export default {
  name: 'BarMenu',

  data: () => ({

  }),
  methods:{
    singOut(){
      getAuth().signOut()
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
