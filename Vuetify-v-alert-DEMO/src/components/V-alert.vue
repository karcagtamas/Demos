<template><v-app>
  <v-container>
    <h1 
      id="title" 
      class="text-xs-center">V-alert Komponens</h1>
    <h1>Különböző figyelmeztetés stílusok:</h1>
    <v-alert 
      :value="true" 
      type="success">Sikeres (succes)</v-alert>
    <v-alert 
      :value="true" 
      type="error">Hiba (error)</v-alert>
    <v-alert 
      :value="true" 
      type="warning">Figyelmeztetés (warning)</v-alert>
    <v-alert 
      :value="true"
      type="info">Információ (info)</v-alert>
    <code class="code">{{ text1 }}</code>
    <h1>Bezárható/újranyitható értesítés:</h1>
    <v-alert 
      v-model="alert" 
      dismissible 
      :type="dismisstype">Ez egy bezárható sikeres értesítés</v-alert>
    <div class="text-xs-center">
      <v-btn 
        color="primary" 
        @click="dismisstype='error'">Hiba</v-btn>
      <v-btn 
        color="primary" 
        @click="dismisstype='success'">Sikeres</v-btn>
      <v-btn 
        color="primary" 
        @click="dismisstype='warning'">Figyelmeztetés</v-btn>
      <v-btn 
        color="primary" 
        @click="dismisstype='info'">Információ</v-btn>
    </div>
    <code class="code">{{ text2 }}</code>
    <h1>Ikonnal és ikon nélkül: </h1>
    <div>
      <v-alert 
        :value="true" 
        :color="icontype" 
        icon="new_releases">Ez egy saját ikonnal rendelkező figyelmeztetés </v-alert>
      <v-alert 
        :value="true" 
        :color="icontype"> Ez egy ikon néküli figyelmeztetés</v-alert>
    </div>
    <div class="text-xs-center">
      <v-btn 
        color="primary" 
        @click="icontype='error'">Hiba</v-btn>
      <v-btn 
        color="primary" 
        @click="icontype='success'">Sikeres</v-btn>
      <v-btn 
        color="primary" 
        @click="icontype='warning'">Figyelmeztetés</v-btn>
      <v-btn 
        color="primary" 
        @click="icontype='info'">Információ</v-btn>
    </div>
    <code 
      class="code" 
      style="margin-bottom:5px">{{ text3 }}</code>
    <code 
      class="code" 
      style="margin-top:5px">{{ text4 }}</code>
    <h1>Megjelenítési animáció:</h1>
    <div>
      <div class="text-xs-center">
        <v-btn 
          color="primary" 
          @click="displayalert=!displayalert">{{ displayalert?"Megjelenít":"Eltüntet" }}</v-btn>
      </div>
      <v-alert 
        :value="!displayalert" 
        :type="showtype" 
        transition="scale-transition"> Ez egy gombbal összekapcsolt sikeres értesítés </v-alert>
      <div 
        v-if="!displayalert" 
        class="text-xs-center">
        <v-btn 
          color="primary" 
          @click="showtype='error'">Hiba</v-btn>
        <v-btn 
          color="primary" 
          @click="showtype='success'">Sikeres</v-btn>
        <v-btn 
          color="primary" 
          @click="showtype='warning'">Figyelmeztetés</v-btn>
        <v-btn 
          color="primary" 
          @click="showtype='info'">Információ</v-btn>
      </div>
    </div>
    <code 
      class="code" 
      style="margin-bottom:5px">{{ text5 }}</code>
    <code 
      class="code" 
      style="margin-top:5px">{{ text6 }}</code>
    <h1>Körvonalazott figyelmeztetések:</h1>
    <div id="outline">
      <v-alert 
        :value="true" 
        type="success" 
        outline>Sikeres (success)</v-alert>
      <v-alert 
        :value="true" 
        type="error" 
        outline>Hiba (error)</v-alert>
      <v-alert 
        :value="true" 
        type="warning" 
        outline>Veszély (warning)</v-alert>
      <v-alert 
        :value="true" 
        type="info" 
        outline>Információs (info)</v-alert>
    </div>
    <code class="code">{{ text7 }}</code>
  </v-container>
</v-app>    
</template>   

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  alert: boolean = true;
  displayalert: boolean = true;
  dismisstype: string = "success";
  icontype: string = "success";
  showtype: string = "success";
  text1: string =
    '<v-alert :value="true" type="success">Sikeres (succes)</v-alert>';
  text2: string =
    '<v-alert v-model="alert" dismissible :type="dismisstype">Ez egy bezárható sikeres értesítés </v-alert>';
  text3: string =
    '<v-alert :value="true" :color="icontype" icon="new_releases">Ez egy saját ikonnal rendelkező figyelmeztetés </v-alert>';
  text4: string =
    '<v-alert :value="true" :color="icontype"> Ez egy ikon néküli figyelmeztetés</v-alert>';
  text5: string =
    '<div class="text-xs-center"> <v-btn color="primary" @click="displayalert=!displayalert"> {{ displayalert?"Megjelenít":"Eltüntet" }} </v-btn> </div>';
  text6: string =
    '<v-alert :value="!displayalert" :type="showtype" transition="scale-transition"> Ez egy gombbal összekapcsolt sikeres értesítés </v-alert>';
  text7: string =
    '<v-alert :value="true" type="success" outline> Sikeres (success)</v-alert>';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  font-size: 100px;
}
.code {
  padding: 10px;
  font-size: 20px;
  width: 100%;
  margin: 40px 0;
}
#outline {
  background-color: #2e2e2e;
  padding: 1rem;
}
</style>
