<template>
  <div class="editarea">
    <div>
      <div class="editfields">
        <div>
          <label>Id:</label>
          <input type="number" v-model="editinghero.id" ref="id" placeholder="Id" v-if="addingHero" />
          <label v-if="!addingHero" class="value">{{editinhHero.id}}</label>
        </div>
        <div>
          <label>Name:</label>
          <input v-model="editingHero.name" ref="name" placeholder="Name" />
        </div>
        <div>
          <label>Saying:</label>
          <input v-model="editingHero.saying" placeholder="saying" @keyup.enter="save" />
        </div>
      </div>
      <button @click="clear">Cancel</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { Hero } from '../hero';

@Component({})
export default class HeroDetail extends Vue {
  @Prop() public hero: Hero = new Hero(0, '', '');
  public addingHero = !this.hero;
  public editingHero: Hero | null = null;
  $refs!: {
    id: HTMLElement;
    name: HTMLElement;
  };

  constructor() {
    super();
  }

  @Watch('hero') public onHeroChanged(value: string, oldValue: string) {
    this.editingHero = this.cloneIt();
  }

  public addhero() {
    const hero = this.editingHero as Hero;
    this.emitRefresh('add', hero);
  }

  @Emit('unselect') public clear() {
    this.editingHero = null;
  }

  public cloneIt() {
    return Object.assign({}, this.hero);
  }

  public created() {
    this.editingHero = this.cloneIt();
  }

  @Emit('heroChanged') public emitRefresh(mode: string, hero: Hero) {
    this.clear();
  }
  public mounted() {
    if (this.addingHero && this.editingHero) {
      this.$refs.id.focus();
    } else {
      this.$refs.name.focus();
    }
  }

  public save() {
    if (this.addingHero) {
      this.addhero();
    } else {
      this.updateHero();
    }
  }

  public updateHero() {
    const hero = this.editingHero as Hero;
    this.emitRefresh('update', hero);
  }
}
</script>

<style lang="scss" scoped>
.editarea {
  float: left;
  input {
    margin: 4px;
    height: 20px;
    color: rgb(0, 120, 215);
  }
  button {
    margin: 8px;
  }
  .editfields {
    margin-left: 12px;
  }
}
</style>