import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  text = "Testando pipe operadores, qualquer coisa escrita aqui";
  date = new Date();

}
