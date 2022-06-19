<template>
  <v-avatar id="activator" icon="account_circle" :image="$store.state.userPhoto" size="large" class="v-card--hover"/>
    <v-menu activator="#activator" location="start">
      <v-list>
          <router-link
              v-for="menu in userMenu"
              :key="menu.to"
              :to="menu.to"
              class="text-decoration-none text-black"
          >
          <v-hover v-slot="{isHovering,props}">
            <v-list-item v-bind="props" :class="isHovering ? 'bg-grey lighten-4' : ''"> <v-list-item-title>{{menu.title}}</v-list-item-title></v-list-item>
          </v-hover>
          </router-link>
          <v-list-item>
            <v-btn variant="contained-flat" color="error" @click="singOut()">Logout</v-btn>
          </v-list-item>

      </v-list>
    </v-menu>
</template>

<script>
import firebase from "firebase/compat";
import router from "../router";

export default {
  name: "ProfileToolbar",
  data: () =>({
    userMenu: [
      {to: '/userProfile',title: 'Profile'},
    ]
  }),
  methods:{
    singOut(){
      firebase.auth().signOut()
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>