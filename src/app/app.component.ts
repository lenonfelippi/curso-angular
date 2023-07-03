import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Lenon Felippi";
  userData = {
    email: "lenonfelippi1@gmail.com",
    role: "admin"
  };
  title = 'curso-angular';
}
