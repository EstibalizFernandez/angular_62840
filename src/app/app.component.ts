import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clases, estilos, pipes y directivas';
  subtitulo = "hola";
  confirmar: 1 | 2 | 3 = 1;
  estudiantes = ['Goixeder', 'Amets', 'Negua'];
  cargando = true;

  constructor() {
    setTimeout (() => {
      this.cargando = !this.cargando;
    }, 6000)
  }

  onClick(seleccion: any) :void {
    this.confirmar = seleccion;
  }

  imprimirEvento(event: any):void {
    console.log(event);
  }

  guardarForm(datosForm: any):void {
    console.log(datosForm);
  }
};