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
          Sikertelen regisztráció!
        </v-alert>
        <v-alert 
          :value="successful"
          type="success">
          A regisztráció sikeres!
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
          <br>
          <v-text-field 
            v-model="repassword"
            type="password"
            label="RePassword" 
            placeholder="RePassword" 
            required />
          <v-btn @click="registration(email, password, repassword)">Registration</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { db } from "./firebaseApp";
import firebase from "firebase";

@Component({
  firestore: {
    heroes: db.collection("heroes")
  }
})
export default class Login extends Vue {
  private email: string = "";
  private password: string = "";
  private repassword: string = "";
  private incorrect: boolean = false;
  private successful: boolean = false;

  private registration(
    email: string,
    password: string,
    repassword: string
  ): void {
    this.successful = false;
    this.incorrect = false;
    if (password == repassword)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          this.successful = true;
        })
        .catch(err => (this.incorrect = true));
    else this.incorrect = true;
  }
}
</script>
<style scoped>
</style>
