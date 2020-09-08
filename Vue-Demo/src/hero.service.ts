import axios from 'axios';

import { Hero } from './hero';

const api = 'api';

class HeroService {
  constructor() {
    console.log('Creating new instance of her.service');
  }

  public deleteHero(hero: Hero) {
    return axios.delete(`${api}/hero/${hero.id}`);
  }

  public getHeroes() {
    return axios.get<Hero[]>(`${api}/heroes`);
  }

  public addHero(hero: Hero) {
    return axios.post(`${api}/hero/`, { hero });
  }

  public updateHero(hero: Hero) {
    return axios.put(`${api}/hero/${hero.id}`, { hero });
  }
}

export const heroService = new HeroService();
