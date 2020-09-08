<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar app>
        <v-toolbar-title>Firebase Demo - Heroes</v-toolbar-title>
        <h1 v-if="userEmail!=''">{{ userEmail }}</h1>
        <router-link to="/">
          <v-btn color="info">Demo</v-btn>
        </router-link>
        <router-link to="/about">
          <v-btn 
            color="info">About</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn color="info">Login</v-btn>
        </router-link>
        <router-link to="/registration">
          <v-btn color="info">Registration</v-btn>
        </router-link>
        <router-link to="/verify">
          <v-btn color="info">Verify</v-btn>
        </router-link>
        <v-spacer />
        <v-btn
          color="info"
          @click="logout()">Logout</v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
      <v-footer />
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import firebase from "firebase";
import router from "./router";

@Component({})
export default class App extends Vue {
  private userEmail: any = "";
  getUserEmail() {
    let user = firebase.auth().currentUser;
    if (user != null) this.userEmail = user.email;
    else this.userEmail = "";
  }
  private logout(): void {
    firebase.auth().signOut();
    alert("Sikeres kijelentkezés!");
    this.userEmail = "";
    router.replace("/login");
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
