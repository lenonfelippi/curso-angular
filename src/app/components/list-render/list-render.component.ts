import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animals';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  animalDetails = "";

  animals: Animal[] = [
    { id: 1, name: "Toby", type: "Cachorro", age: 3 },
    { id: 2, name: "Simba", type: "Leão", age: 5 },
    { id: 3, name: "Luna", type: "Gato", age: 2 },
    { id: 4, name: "Max", type: "Cachorro", age: 4 },
    { id: 5, name: "Bella", type: "Gato", age: 1 },
    { id: 6,  name: "Charlie", type: "Cachorro", age: 2 },
    { id: 7, name: "Lola", type: "Gato", age: 3 },
    { id: 8,  name: "Rocky", type: "Cachorro", age: 6 },
    { id: 9, name: "Milo", type: "Gato", age: 2 },
    { id: 10, name: "Daisy", type: "Cachorro", age: 7 }
  ];

  showAge(animal: Animal) {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((item) => animal.id !== item.id);
  }

}
