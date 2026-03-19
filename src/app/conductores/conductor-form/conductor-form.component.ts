import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConductoresService } from '../conductores.service';

@Component({
  selector: 'app-conductor-form',
  template: `
    <form [formGroup]="conductorForm" (ngSubmit)="saveConductor()">
      <label>Nombre:</label>
      <input formControlName="nombre" />
      <br />
      <label>Apellido:</label>
      <input formControlName="apellido" />
      <br />
      <button type="submit">Guardar</button>
    </form>
  `,
})
export class ConductorFormComponent implements OnInit {
  conductorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private conductoresService: ConductoresService
  ) {
    this.conductorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  saveConductor() {
    this.conductoresService.saveConductor(this.conductorForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
    });
  }
}
