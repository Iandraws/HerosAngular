import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock.heros';

@Component({
  standalone: true,
  imports: [NgbModule, HeroDetailComponent, FormsModule, CommonModule],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero: Hero | undefined;

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
    
  }

  updateHero(newName: string) {
    this.selectedHero.name = newName;
  }
  deleteHero(event: MouseEvent, toDeleteHero: Hero) {
    event.stopPropagation();

    this.heroes = this.heroes.filter((hero) => hero.id !== toDeleteHero.id);

    if (this.selectedHero && this.selectedHero.id === toDeleteHero.id) {
      this.onSelect(undefined);
    }
  }
  addHero(name: string) {
    const newHero: Hero = {
      name: name, id: this.heroes.length + 5,
      checked: false
    };

    this.heroes = [...this.heroes, newHero];
  }
  delete(){
    this.heroes = this.heroes.filter((hero) => hero.checked==false );
  }

  
}
