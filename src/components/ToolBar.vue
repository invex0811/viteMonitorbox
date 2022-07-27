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
    <LoginRegister v-if="!userStatus" />
    <!-- Avatar and menu block -->
    <div id="showmenu" v-else>
    <v-avatar
      :image="$store.state.userPhoto"
      icon="account_circle"
      class="v-card--hover"

    />
    <v-menu activator="#showmenu">
      <v-list>
        <router-link v-for="item in itemMenu" :key="item.title" :to="item.src" class="text-decoration-none text-black">
          <v-list-item :append-icon="item.icon" @click="$store.state.tab = item.title.toLowerCase()">
            {{ item.title }}
          </v-list-item>
        </router-link>
        <v-list-item>
          <v-btn color="error" variant="tonal" class="mb-1" @click="singOut()"> Logout </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
    <!-- END avatar and menu block -->
  </v-app-bar>
</template>

<script>
import { getAuth } from "firebase/auth";
import LoginRegister from "./LoginRegister.vue";
import router from "../router";

export default {
  name: "ToolBar",
  components: { LoginRegister },
  data: () => ({
    userStatus: false,
    itemMenu: [
      {
        title: "Profile",
        src: "/userProfile",
        icon: 'account_circle'
      },
      {
        title: "Setting",
        src: "/userProfile",
        icon: 'settings'
      },
    ],
  }),
  mounted() {
    getAuth().onAuthStateChanged((user) => {
      this.userStatus = !!user;
    });
  },
  methods: {
    showBarMenu() {
      this.$store.state.show = !this.$store.state.show;
    },
    singOut(){
      try {
        getAuth().signOut()
        router.push('/')
        this.$store.commit('showAlert',['Successful logout','success'])
      }catch (e) {
        this.$store.commit('showAlert',[e.message,'error'])
      }

    }
  },
  computed: {},
};
</script>

<style scoped></style>
