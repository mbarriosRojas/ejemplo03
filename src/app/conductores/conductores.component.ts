import { Component, OnInit } from '@angular/core';
import { ConductoresService } from './conductores.service';
import { VehiculosService } from '../vehiculos/vehiculos.service';

@Component({
  selector: 'app-conductores',
  template: `
    <div class="conductores">
      <h1>Gestión de Conductores</h1>
      <ul>
        <li *ngFor="let conductor of conductores">{{ conductor.nombre }} ({{ conductor.vehiculo ? conductor.vehiculo.marca : 'Sin vehículo' }})</li>
      </ul>
    </div>
  `
})
export class ConductoresComponent implements OnInit {
  conductores = [];

  constructor(private conductoresService: ConductoresService, private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.conductoresService.getConductores().subscribe(conductores => {
      this.conductores = conductores;
    });
  }
}
