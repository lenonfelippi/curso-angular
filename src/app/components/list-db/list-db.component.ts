import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animals';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-db',
  templateUrl: './list-db.component.html',
  styleUrls: ['./list-db.component.scss']
})
export class ListDbComponent {
  animals: Animal[] = [];

  constructor(
    private listService: ListService
  ) {
    this.getAnimals();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter(item => item.id !== animal.id)
    this.listService.remove(animal.id);
  }

}
