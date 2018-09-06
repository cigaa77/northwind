import { Component } from '@angular/core';

// Deneme Amaçlı a2

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northwind';

  public options = {
    position: ["bottom", "left"],
    timeOut: 3000,
    lastOnBottom: true
  }
}
