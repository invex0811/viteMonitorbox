<template>
  <v-app class="bg-grey-lighten-3">
    <BarMenu/>
    <ToolBar />
    <v-main class="full-screen">
      <v-slide-x-reverse-transition>
        <v-alert  v-if="$store.state.alert.show" position="absolute" min-width="300" :type="$store.state.alert.type" class="ma-2" style="z-index: 2001;right: 0" >
          <v-alert-title> {{ $store.state.alert.text}} </v-alert-title>
        </v-alert>
      </v-slide-x-reverse-transition>
      <v-container fluid class="fill-height pa-0">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BarMenu from './components/BarMenu.vue'
import ToolBar from "./components/ToolBar.vue"
import {getDatabase, onValue, ref} from "firebase/database";
import {getAuth} from "firebase/auth";



export default {
  name: 'App',
  components: {
    ToolBar,
    BarMenu
  },
  data: () => ({
  }),
  mounted() {
    if (getAuth().currentUser != null){
    const user = getAuth().currentUser;
    const UID = user.uid;
    const db = getDatabase();
    const refUsers = ref(db, "users/" + UID);

      onValue(refUsers, (snapshot) => {
        this.$store.state.userPhoto = snapshot.val().photo;
      })
  }



  },
  watch:{

  },
  methods: {
  },
  computed:{
    // checkPhoto(){
    //   onValue(ref(getDatabase(), "users/" + getAuth().currentUser.uid), (snapshot) => {
    //             this.role = snapshot.val().role;
    //             this.fullName = snapshot.val().fullName;
    //             this.$store.state.userPhoto = snapshot.val().photo;
    //   })
    // }
  }

}
</script>

<style>
.full-screen{
  min-height: 100vh;
}
</style>