import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculo-form',
  template: `
    <div class="vehiculo-form">
      <h1>Crear/Editar Vehículo</h1>
      <form (ngSubmit)="saveVehiculo()">
        <label>Marca:</label>
        <input type="text" [(ngModel)]="vehiculo.marca" name="marca">
        <br>
        <label>Modelo:</label>
        <input type="text" [(ngModel)]="vehiculo.modelo" name="modelo">
        <br>
        <label>Año:</label>
        <input type="number" [(ngModel)]="vehiculo.año" name="año">
        <br>
        <button type="submit">Guardar</button>
      </form>
    </div>
  `
})
export class VehiculoFormComponent implements OnInit {
  vehiculo = {};

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
  }

  saveVehiculo() {
    this.vehiculosService.createVehiculo(this.vehiculo).subscribe(vehiculo => {
      console.log(vehiculo);
    });
  }
}
