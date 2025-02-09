import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveForms',
  standalone: false,

  templateUrl: './reactiveForms.component.html',
})
export class ReactiveFormsComponent {
  titulo: String = 'Ejemplo de ReactiveForms';
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Reactive Forms
    this.contactForm = this.fb.group({
      nombre: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      mensaje: [null, [Validators.required, Validators.minLength(10)]],
    });

    console.log(this.contactForm);
  }

  // Reactive Forms
  get nombreControl() {
    return this.contactForm.get("nombre");
  }

  get emailControl() {
    return this.contactForm.get("email");
  }

  get mensajeControl() {
    return this.contactForm.get("mensaje");
  }
  
  get emailControlIsinvalid() {
    return this.emailControl?.invalid && this.emailControl.touched
  }

  get emailControlIsValid() {
    return this.emailControl?.valid && this.emailControl.touched
  }
  get emailErrors() {
    return this.emailControl?.errors;
  }

  get nombreErrors() {
    return this.nombreControl?.errors;
  }

  get mensajeErrors() {
    return this.mensajeControl?.errors;
  }

}
