import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'green';

  classes = ["red-title", "small-title"];
  underline = 'underline-title';

}
