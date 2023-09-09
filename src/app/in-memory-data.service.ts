import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 12, name: 'Dr.Nice'},
      {id: 13, name: 'Bombast'},
      {id: 14, name: 'Spider-man'},
      {id: 15, name: 'Batman'},
      {id: 16, name: 'Iron-man'},
      {id: 17, name: 'Terminator'},
      {id: 18, name: 'Magnet'},
      {id: 19, name: 'Dr.Iq'},
      {id: 20, name: 'Split'}
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))
      + 1 : 11
  }
}
