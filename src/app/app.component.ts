import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejejmplo de PIPES';
  confirmar: 1 | 2 | 3 = 1;

  constructor() {
    
  }
};