<template>
  <section class="fill-height ma">
    <v-row justify="center" class="ma-0 p">
      <v-col cols="10" lg="4" md="4">
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
        <div class="d-flex flex-column justify-center px-lg-10" v-if="$store.state.changeVeawStyle === false">
          <v-card
              v-for="(user, index) in users"
              :key="index"
              class="d-flex align-center my-2 px-1 px-lg-2"
              height="50"
          >
            <div class="overflow-x-auto">{{ user.name }}</div>
            <v-spacer/>
            <div class="d-flex align-center">
              <v-btn @click="user.amount--" variant="text" size="x-small"
              >
                <v-icon color="#424242">remove</v-icon>
              </v-btn
              >
              <span class="text-h6 px-2">{{ user.amount }}</span>
              <v-btn @click="user.amount++" variant="text" size="x-small">
                <v-icon>add</v-icon>
              </v-btn>
            </div>

            <v-btn variant="text" color="error">
              <v-icon> close</v-icon>
              <v-menu
                  activator="parent"
                  anchor="end center"
                  v-model="user.menu"
              >
                <v-card class="d-flex flex-column pa-2">
                  Delete?
                  <div>
                    <v-btn
                        @click="users.splice(index, 1)"
                        class="mr-2"
                        color="success"
                        size="small"
                    >
                      Yes
                    </v-btn>
                    <v-btn
                        @click="user.menu = false"
                        color="error"
                        size="small"
                    >
                      No
                    </v-btn>
                  </div>
                </v-card>
              </v-menu>
            </v-btn>
          </v-card>
        </div>
        <!-- Tabs for phone -->
        <div class="d-flex flex-wrap  justify-center" v-else>
          <v-card
              v-for="(user, index) in users"
              :key="index"
              class="d-flex align-center flex-column ma-1"
              width="45%"

          >
            <div class="overflow-x-auto">{{ user.name }}</div>

            <div class="d-flex align-center">
              <v-btn @click="user.amount--" variant="text" size="x-small"
              >
                <v-icon color="#424242">remove</v-icon>
              </v-btn
              >
              <span class="text-h6 px-2">{{ user.amount }}</span>
              <v-btn @click="user.amount++" variant="text" size="x-small">
                <v-icon>add</v-icon>
              </v-btn>
            </div>

            <v-btn variant="text" color="error" absolute top="0">
              <v-icon> close</v-icon>
              <v-menu
                  activator="parent"
                  anchor="bottom center"
                  v-model="user.menu"
              >
                <v-card class="d-flex flex-column pa-2">
                  Delete?
                  <div>
                    <v-btn
                        @click="users.splice(index, 1)"
                        class="mr-2"
                        color="success"
                        size="small"
                    >
                      Yes
                    </v-btn>
                    <v-btn
                        @click="user.menu = false"
                        color="error"
                        size="small"
                    >
                      No
                    </v-btn>
                  </div>
                </v-card>
              </v-menu>
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
        menu: false,
      });
      this.userField = null;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
