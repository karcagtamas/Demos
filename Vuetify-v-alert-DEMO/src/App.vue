<template>
  <div>
    <Valert />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Valert from "./components/V-alert.vue";

@Component({
  components: {
    Valert,
    Vue
  }
})
export default class App extends Vue {}
</script>

<style>
* {
  font-family: "Comfortaa", cursive;
}
#app {
  background-color: lightcyan;
}
</style>
