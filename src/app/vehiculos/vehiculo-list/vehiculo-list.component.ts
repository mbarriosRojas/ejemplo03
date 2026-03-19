import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculo-list',
  template: `
    <div class="vehiculo-list">
      <h1>Lista de Vehículos</h1>
      <ul>
        <li *ngFor="let vehiculo of vehiculos">{{ vehiculo.marca }} {{ vehiculo.modelo }}</li>
      </ul>
    </div>
  `
})
export class VehiculoListComponent implements OnInit {
  vehiculos = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }
}
