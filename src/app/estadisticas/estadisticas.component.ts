import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from './estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  template: `
    <div>
      <h1>Estadísticas</h1>
      <p>Inicio: {{ inicio | date }}</p>
      <p>Fin: {{ fin | date }}</p>
      <p>Ingresos: {{ ingresos }}</p>
      <p>Viajes: {{ viajes }}</p>
    </div>
  `,
})
export class EstadisticasComponent implements OnInit {
  inicio: Date;
  fin: Date;
  ingresos: number;
  viajes: number;

  constructor(private estadisticasService: EstadisticasService) {}

  ngOnInit(): void {
    this.estadisticasService.getEstadisticas().subscribe((estadisticas) => {
      this.inicio = estadisticas[0].fecha;
      this.fin = estadisticas[estadisticas.length - 1].fecha;
      this.ingresos = estadisticas.reduce((acc, estadistica) => acc + estadistica.ingresos, 0);
      this.viajes = estadisticas.reduce((acc, estadistica) => acc + estadistica.viajes, 0);
    });
  }
}
