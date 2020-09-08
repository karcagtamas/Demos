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
        <v-form>
          <v-text-field 
            v-model="name" 
            label="Name" 
            placeholder="Super name" 
            required />
          <br>
          <v-checkbox 
            v-model="isHero" 
            label="Is Hero?" 
            required />
          <v-select
            v-model="universe"
            :items="items"
            label="Universe" />
          <v-textarea
            v-model="description"
            label="Some information about this Hero"
            hint="Some information about this Hero"
            placeholder="Some information about this Hero" />
          <v-textarea
            v-model="origin"
            label="The character origin story"
            hint="The character origin story"
            placeholder="The character origin story" />
          <br>
          <v-text-field
            v-model="img"
            label="Super Hero Image URL"
            placeholder="Image URL"
            required />
          <v-btn @click="addHero(name, img, isHero, description, origin, universe)">Add</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <br>
    <!-- ---------------- -->
    <v-layout
      row 
      wrap>
      <v-flex 
        v-for="(heroes, index) in heroes" 
        :key="index" 
        xs12 
        sm6 
        md3>
        <v-card>
          <v-img 
            class="white--text" 
            height="200px" 
            :src="heroes.img">
            <v-container 
              fill-height 
              fluid>
              <v-layout fill-height>
                <v-flex 
                  xs12 
                  align-end 
                  flexbox>
                  <span class="headline">{{ heroes.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>  
            <div>
              <span class="grey--text">{{ index + 1 }}. Character</span>
              <br>
              <span><strong>Upload date</strong>: {{ heroes.createdAt.toDate() }}</span>
              <br>
              <span><strong>Made by</strong>: {{ heroes.createdBy }}</span>
              <br> <br>
              <h2><b>He/She is a {{ heroes.isHero? "Hero":"Villain" }}</b></h2>
              <h4><b>{{ heroes.universe }} Universe</b></h4>
              <v-expansion-panel dark>
                <v-expansion-panel-content>
                  <div slot="header">Description</div>
                  <v-card>
                    <v-card-text>
                      {{ heroes.description }}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Origin story</div>
                  <v-card>
                    <v-card-text>
                      {{ heroes.origin }}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn 
              flat 
              color="red" 
              @click="deleteHero(heroes.id)">Delete</v-btn>
          </v-card-actions>
        </v-card>
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
export default class Demo extends Vue {
  private name: string = "";
  private img: string = "";
  private isHero: boolean = true;
  private heroes: any = [];
  private orderedLocations: any = [];
  private description: string = "";
  private origin: string = "";
  private universe: string = "Other";
  private items: string[] = ["DC", "Marvel", "Other"];

  private addHero(
    name: string,
    img: string,
    isHero: boolean,
    description: string,
    origin: string,
    universe: string
  ): void {
    const createdAt = new Date();
    let user = firebase.auth().currentUser;
    let createdBy;
    if (user) createdBy = user.email;
    else createdBy = null;
    // prettier-ignore
    db.collection("heroes")
      .add({ name, img, createdAt, isHero, description, origin, createdBy, universe })
      .then(docRef => {
        alert(`Document written with ID: ${docRef.id}`);
      })
      .catch(error => {
        alert(`Error adding document: ${error}`);
      });
    this.name = "";
    this.img = "";
    this.isHero = true;
    this.description = "";
    this.origin = "";
    this.universe = "Other";
  }

  private deleteHero(id: any): void {
    // prettier-ignore
    db.collection("heroes")
      .doc(id)
      .delete()
      .then(() => {
        alert("Document deleted!");
      })
      .catch(error => {
        alert(`Error deleting document: ${error}`);
      });
  }
  @Watch("heroes")
  private onLocationsChanged(value: number, oldValue: number) {
    // alert("invoke: onLocationsChanged");
  }
}
</script>

<style scoped>
v-select {
  width: 100%;
}
</style>
