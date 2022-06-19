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

    <ProfileToolbar v-if="userStatus" />
    <LoginRegister v-else/>

  </v-app-bar>
</template>

<script>
import firebase from "firebase/compat";
import LoginRegister from "./LoginRegister.vue";
import ProfileToolbar from "./ProfileToolbar.vue";
export default {
  name: "ToolBar",
  components: {ProfileToolbar, LoginRegister},
  data: () => ({
    userStatus: false
  }),
  mounted() {
    firebase.auth().onAuthStateChanged( (user) =>{
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
