<template>
  <v-row justify="center">
    <v-col cols="5">
      <div class="d-flex">
        <div>{{ user.name }}</div>
        <v-spacer />
        <div>
          <v-btn @click="user.amount--">-</v-btn>
          {{ user.amount }}
          <v-btn @click="user.amount++">+</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "list",
  data: () => ({
    userField: null,
    users: [{}],
  }),
  methods: {
    addUser() {
      this.users.push({
        name: this.userField,
        amount: 0,
      });
    },
  },
  computed: {},
};
</script>

<style scoped></style>
