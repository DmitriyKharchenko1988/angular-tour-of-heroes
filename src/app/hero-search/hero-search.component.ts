import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Observable, Subject,} from "rxjs"
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
