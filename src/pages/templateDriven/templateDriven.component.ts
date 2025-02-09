import { Component } from '@angular/core';

@Component({
  selector: 'app-templateDriven',
  standalone: false,
  
  templateUrl: './templateDriven.component.html',
})
export class TemplateDrivenComponent {
  titulo: String = 'Ejemplo de Template Driven';
  contactFormModel = {
    nombre: "",
    email: "",
    mensaje: ""
  };

  onSubmit(event: any) {
    console.log(event)
  }
}
