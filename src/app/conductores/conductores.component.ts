import { Component, OnInit } from '@angular/core';
import { ConductoresService } from './conductores.service';

@Component({
  selector: 'app-conductores',
  template: `
    <ul>
      <li *ngFor="let conductor of conductores">{{ conductor.nombre }}</li>
    </ul>
  `
})
export class ConductoresComponent implements OnInit {
  conductores = [];

  constructor(private conductoresService: ConductoresService) { }

  ngOnInit(): void {
    this.conductoresService.getConductores().subscribe(conductores => {
      this.conductores = conductores;
    });
  }
}
