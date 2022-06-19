<template>
  <v-dialog v-model="loginWindow">
    <template v-slot:activator="{ props }">
      <v-avatar icon="login" class="v-card--hover" v-bind="props">
      </v-avatar>
    </template>

    <v-card min-width="600" class="pa-5">
      <v-row justify="center">
        <v-col cols="6">
          <!--          Login form             -->
          <v-form class="text-center" v-if="registrationWindow">
            <h1 class="text-center">Login</h1>
            <v-text-field
              variant="outlined"
              v-model="email"
              hide-details="auto"
              label="Email"
              class="py-2"
            />
            <v-text-field
              variant="outlined"
              v-model="password"
              hide-details="auto"
              label="Password"
              class="py-2"
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
            <div>
              <v-btn block color="success" @click="signInOnAccount()">
                Login
              </v-btn>
            </div>

            <div class="d-flex align-center justify-center">
              Dont have account?
              <v-btn
                color="primary"
                size="x-small"
                @click="registrationWindow = false"
              >
                Registration
              </v-btn>
            </div>
          </v-form>
          <!--          Register block         -->
          <v-form class="text-center" v-else>
            <h1 class="text-center">Registration</h1>
            <v-text-field
              variant="outlined"
              v-model="email"
              hide-details="auto"
              label="Email"
              class="py-2"
            />
            <v-text-field
              variant="outlined"
              v-model="password"
              hide-details="auto"
              label="Password"
              class="py-2"
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
<!--            <v-text-field-->
<!--              variant="outlined"-->
<!--              v-model="confirmPassword"-->
<!--              hide-details="auto"-->
<!--              label="Confirm password"-->
<!--              class="py-2"-->
<!--              :append-icon="-->
<!--                showConfirmPassword ? 'visibility' : 'visibility_off'-->
<!--              "-->
<!--              :type="showConfirmPassword ? 'text' : 'password'"-->
<!--              @click:append="showConfirmPassword = !showConfirmPassword"-->
<!--            />-->
            <div>
              <v-btn block color="success" @click="createAccount()">
                Registration
              </v-btn>
            </div>
            <div class="d-flex align-center justify-center">
              You have account?
              <v-btn
                color="primary"
                size="x-small"
                @click="registrationWindow = true"
              >
                Login
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from 'firebase/compat'
import router from "../router"


function addUserData() {
  firebase.database().ref('users/').child(firebase.auth().currentUser.uid).set({
    fullName: '',
    email: firebase.auth().currentUser.email,
    role: 'user',
    photo: '',
  })
}

export default {
  name: "LoginRegister",
  data: () => ({
    loginWindow: false,
    email: null,
    password: null,
    showPassword: false,
    confirmPassword: null,
    registrationWindow: true,
    showConfirmPassword: false,
  }),
  methods: {
    createAccount() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            router.push('/')
            this.loginWindow = false
            addUserData()
          })
          .catch(error => {
            console.log(error.code)
            alert(error.message);
          })

    },
    signInOnAccount() {
          firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            router.push('/')
            this.loginWindow = false
          })
          .catch(error => {
            alert(error)
          })

    }
  },
};
</script>

<style></style>
