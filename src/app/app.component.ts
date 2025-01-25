import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clases, estilos, pipes y directivas';
  confirmar: 1 | 2 | 3 = 1;
  estudiantes = ['Goixeder', 'Amets', 'Negua'];
  cargando = true;

  constructor() {
    setTimeout (() => {
      this.cargando = !this.cargando;
    }, 6000)
  }
};