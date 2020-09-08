<template>
  <v-app>
    <v-layout>
      <v-flex>
        <button @click="sendverify()">Send Verifying E-mail</button>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { db } from "./firebaseApp";

@Component({
  firestore: {
    heroes: db.collection("heroes")
  }
})
export default class Verify extends Vue {
  private sendverify() {
    let user = firebase.auth().currentUser;
    if (user != null) {
      user
        .sendEmailVerification()
        .then(res => alert("E-mail sent!"))
        .catch(err => alert(err));
    }
  }
}
</script>
<style scoped>
</style>
