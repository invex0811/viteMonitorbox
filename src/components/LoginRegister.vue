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
              :rules="[rules.email,rules.required]"
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
              :rules="[rules.email,rules.required]"
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
              :rules="[rules.required,rules.counter]"
            />
            <v-text-field
              variant="outlined"
              v-model="confirmPassword"
              hide-details="auto"
              label="Confirm password"
              class="py-2"
              :append-icon="
                showConfirmPassword ? 'visibility' : 'visibility_off'
              "
              :type="showConfirmPassword ? 'text' : 'password'"
              @click:append="showConfirmPassword = !showConfirmPassword"

              :rules="[rules.required,rules.samePassword]"
            />
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
import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, onValue, ref,set} from "firebase/database";
import router from "../router";


// function addUserData() {
//   // getDatabase().ref('users/').child(getAuth().currentUser.uid).set({
//   //   fullName: '',
//   //   email: getAuth().currentUser.email,
//   //   role: 'user',
//   //   photo: '',
//   // })
//
// }

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

    rules: {
      required: value => !!value || 'Required.',
      counter: value => value.length > 5 || 'Password must be more than 6 characters',
      samePassword: value => value === this.password || 'Password must match',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    }
  }),
  methods: {
    createAccount() {
        createUserWithEmailAndPassword(getAuth(),this.email, this.password)
            .then(()=>{
              router.push('/')
              this.loginWindow = false
              set(ref(getDatabase(),'users/'+ getAuth().currentUser.uid),{
                fullName: '',
                email: getAuth().currentUser.email,
                role: 'user',
                photo: '',
              })
            })
            .catch((e)=>{
              console.log(e.code, e.message)
            })
    },
    signInOnAccount() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(()=>{
            router.push('/')
            this.loginWindow = false
            this.$store.state.user = getAuth().currentUser
            onValue(ref(getDatabase(), "users/" + getAuth().currentUser.uid), (snapshot) => {
              this.$store.state.userPhoto = snapshot.val().photo;
            })
            this.$store.commit('showAlert',['Login successful','success'])
            // window.location.reload()

          })
          .catch((e)=>{
            this.$store.commit('showAlert',[e.message,'error'])
          })
    },

  },
};
</script>

<style></style>
