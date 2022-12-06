import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from '../hero';
import { HEROES } from '../mock.heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(private modalService: NgbModal) {
  }
  heroes=HEROES;
  
  
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  selectedHero?: Hero;
   onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  
 
}
