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
  </v-app-bar>
</template>

<script>
export default {
  name: "ToolBar",

  data: () => ({}),
  methods: {
    showBarMenu() {
      this.$store.state.show = !this.$store.state.show;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
