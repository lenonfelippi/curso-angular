import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name: string = "Lenon";
  age: number = 30;
  job: string = "Programador Front-end";
}
