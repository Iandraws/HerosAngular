import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  selectedHero: Hero;

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  updateHero(newName: string) {
    this.selectedHero.name = newName;
  }
}
