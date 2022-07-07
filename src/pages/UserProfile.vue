<template>
  <section class="d-flex flex-column align-center">
    <v-tabs v-model="tab" class="mt-5" color="blue">
      <v-tab v-for="({name,value},i) in tabsList" key="i" :value="value">{{name}}</v-tab>
    </v-tabs>
    <v-card class=" pa-5 d-flex flex-column align-center" width="600">
      <v-window v-model="tab">
        <v-window-item value="profile">
          <ProfileTab/>
        </v-window-item>
        <v-window-item value="setting" >
          Setting coming soon <br>
          Your propose can send to <a href="mailto:monitorbox37@gmail.com">monitorbox37@gmail.com</a>
        </v-window-item>
      </v-window>
    </v-card>
  </section>
</template>

<script>
import ProfileTab from "../components/ProfileTab.vue";

export default {
  name: "UserProfile",
  components: {ProfileTab},

  data: () => ({
    tab: null,
    tabsList: [
      {name: 'Profile', value: 'profile'},
      {name: 'Setting', value: 'setting'}
    ],


  }),
};
</script>

<style scoped>
input {
  outline: none;
}
</style>
