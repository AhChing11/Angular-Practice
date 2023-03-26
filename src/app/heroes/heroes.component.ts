import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

//   hero:Hero = {
//     id:1,
//     name: 'Windstorm'
//   };
//   heroes =HEROES;
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getHeroes();
  }

//   onSelect(hero: Hero): void {
//       this.selectedHero = hero;
//       this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//     }

  //Method 1: Synchronous
//   getHeroes(): void {
//     this.heroes = this.heroService.getHeroes();
//   }
  //Method 2: Asynchronous, with Observable
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); //subscirbe means it subscribe to keep keep checking if any changes occur. A function is passed into .subscribe as argument to process the value received
  }


}
