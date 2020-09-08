  <template>
  <v-app>
   <v-container>
     <v-layout row wrap>
       <v-flex v-for="i in 12" :key="i" xs12 sm6 md4 lg3 xl2 >
         <v-card v-bind:color="colors[i % 4]">
           <v-card-text>{{String.fromCharCode(64+i)}}. {{$vuetify.breakpoint}}</v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
  </v-app>
</template>

<script  lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  colors: string[] = ["red", "pink", "orange", "blue"];
  color: string = "red";
}
</script>
<style scoped>
</style>
