<template>
  <section>
    <v-row justify="center">
      <v-col cols="5">
        <v-card class="mt-5 pa-5 d-flex flex-column align-center">
          <v-row justify="center" no-gutters>
            <v-col>
              <v-hover v-slot="{isHovering,props}">
                <v-img width="150" aspect-ratio="1" :src="$store.state.userPhoto" v-bind="props" class="d-flex align-end">
                  <v-expand-transition>
                    <v-sheet v-if="isHovering" class="bg-transparent">
                      <v-btn variant="text" rounded="0" @click="showImageOverlay = !showImageOverlay">
                        pick photo
                        <v-icon icon="add_photo_alternate" />
                      </v-btn>
                    </v-sheet>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </v-col>
            <v-overlay v-model="showImageOverlay" class="d-flex align-center justify-center">
              <div class="d-flex align-center justify-center">
                <v-card
                    v-for="photo in usersPhoto"
                    class="pa-2 ma-2"
                >
                  <v-img width="200" :src="photo" @click="this.userPhoto = photo, savePhoto()" class="v-card--hover"/>
                </v-card>
              </div>
            </v-overlay>
            <v-col>
              <v-table>
                <tbody>
                <tr>
                  <td>Full name:</td>
                  <td><input :readonly="editingStatus" v-model="fullName"/></td>
                </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{{userEmail}}</td>
                  </tr>
                  <tr>
                    <td>Role:</td>
                    <td>{{role}}</td>
                  </tr>
                </tbody>
              </v-table>

              <div class="d-flex justify-end mt-1" >
                <v-btn variant="text" size="x-small" color="info" v-if="editingStatus" @click="editingStatus = !editingStatus">
                  change data
                </v-btn>
                <v-btn size="small" color="success" v-else @click="saveData()" >
                  Save
                </v-btn>
              </div>

            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { getAuth } from "firebase/auth"
import { getDatabase,ref,update, onValue } from "firebase/database"

const user = getAuth().currentUser
const UID = user.uid

const db = getDatabase()
const refUsers = ref(db,'users/' + UID )

export default {
  name: "UserProfile",
  components: {},

  data: () => ({
    userEmail: null,
    userId: null,

    editingStatus: true,
    showImageOverlay: false,
    role: '',
    fullName: '',
    usersPhoto: [
      'https://images.unsplash.com/photo-1655650475531-532564a26c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1655650876161-f45a626014c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1655650876145-22fa34d94218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1655650876411-baf437280c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1655650876167-ebaf308495a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    ],
  }),
  mounted() {
    if (user != null) {
      this.userEmail = user.email
      this.userId = UID
    }

    onValue(refUsers,(snapshot) =>{
      this.role = snapshot.val().role
      this.fullName = snapshot.val().fullName
      this.$store.state.userPhoto = snapshot.val().photo
    })
  },
  methods: {
    saveData(){
      update(refUsers, {
        'fullName': this.fullName
      })
      this.editingStatus = true
    },
    savePhoto(){
      update(refUsers, {
        'photo': this.userPhoto
      })
      this.showImageOverlay = false
    }
  },
  computed:{

  }
};
</script>

<style scoped>
  input{
    outline: none;
  }
</style>
