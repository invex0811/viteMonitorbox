<template>
  <v-app-bar color="white">
    <v-app-bar-nav-icon @click="showBarMenu()" />
    <v-toolbar-title>{{ $store.state.titleToolBar }}</v-toolbar-title>

    <div
      v-if="$store.state.titleToolBar == 'Autocommit counter'"
      class="d-flex align-center"
    >
      <v-icon
        icon="view_headline"
        :color="$store.state.changeVeawStyle ? '' : 'info'"
      />
      <v-switch
        hide-details
        class="ml-2"
        v-model="$store.state.changeVeawStyle"
      />
      <v-icon
        icon="grid_view"
        :color="$store.state.changeVeawStyle ? 'info' : ''"
      />
    </div>

    <v-avatar :image="$store.state.userPhoto" icon="account_circle" class="v-card--hover"  @click="$router.push('/userProfile')" v-if="userStatus"/>
    <LoginRegister v-else/>

  </v-app-bar>
</template>

<script>
import {getAuth} from "firebase/auth";
import LoginRegister from "./LoginRegister.vue";



export default {
  name: "ToolBar",
  components: {LoginRegister},
  data: () => ({
    userStatus: false,
  }),
  mounted() {
    getAuth().onAuthStateChanged( (user) =>{
      this.userStatus = !!user;

    })
  },
  methods: {
    showBarMenu() {
      this.$store.state.show = !this.$store.state.show;
    },

  },
  computed: {

  },
};
</script>

<style scoped></style>
