<template>
  <section class="fill-height pt-5">
    <v-row justify="center">
      <v-col cols="4">
        <div class="d-flex align-center">
          <v-text-field
            variant="outlined"
            label="User"
            hide-details="auto"
            class="mt-3"
            v-model="userField"
          />
          <v-btn class="mt-2 ml-2" @click="addUser()" color="success">
            Add user
          </v-btn>
        </div>
        <div class="d-flex flex-column justify-center px-10">
          <v-card
            v-for="(user, index) in users"
            :key="index"
            class="d-flex align-center my-2 px-2"
            height="50"
          >
            <div>{{ user.name }}</div>
            <v-spacer />
            <div class="d-flex align-center">
              <v-btn @click="user.amount--" variant="text" size="x-small"
                ><v-icon color="#424242">remove</v-icon></v-btn
              >
              <span class="text-h6 px-2">{{ user.amount }}</span>
              <v-btn @click="user.amount++" variant="text" size="x-small">
                <v-icon>add</v-icon>
              </v-btn>
            </div>
            <v-btn variant="text" color="error" @click="users.splice(index, 1)">
              <v-icon> close </v-icon>
            </v-btn>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "AutocommitCounter",
  data: () => ({
    userField: null,
    users: [],
    showModelWindow: false,
  }),
  methods: {
    addUser() {
      this.users.push({
        name: this.userField,
        amount: 0,
      });
      this.userField = null;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
