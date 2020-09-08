<template>
  <v-app>
    <v-layout>
      <v-flex
        xs12 
        sm10
        offset-sm1 
        md8
        offset-md2
        lg6
        offset-lg3
        xl4
        offset-xl4>
        <v-alert 
          :value="incorrect" 
          type="error">
          Rossz adatokat adott meg! Próbálja újra!
        </v-alert>
        <v-alert 
          :value="successful"
          type="success">
          A belépés sikeres!
        </v-alert>
        <v-form>
          <v-text-field 
            v-model="email" 
            label="E-mail" 
            placeholder="E-mail address" 
            required />
          <br>
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            placeholder="Password"
            required />
          <v-btn @click="login(email, password)">Login</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { db } from "./firebaseApp";
import router from "../router";

@Component({
  firestore: {
    heroes: db.collection("heroes")
  }
})
export default class Login extends Vue {
  private email: string = "";
  private password: string = "";
  private successful: boolean = false;
  private incorrect: boolean = false;

  private login(email: string, password: string): void {
    this.successful = false;
    this.incorrect = false;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.successful = true;
        let user = firebase.auth().currentUser;
        if (user && !user.emailVerified)
          setTimeout(() => {
            router.replace("/verify");
          }, 2000);
        else
          setTimeout(() => {
            router.replace("/");
          }, 2000);
      })
      .catch(err => {
        this.incorrect = true;
      });
  }
}
</script>
<style scoped>
</style>
