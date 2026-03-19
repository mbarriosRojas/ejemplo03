import { Component, OnInit } from '@angular/core';
import { ConductoresService } from '../conductores.service';

@Component({
  selector: 'app-conductor-list',
  template: `
    <ul>
      <li *ngFor="let conductor of conductores">{{ conductor.nombre }} {{ conductor.apellido }}</li>
    </ul>
  `,
})
export class ConductorListComponent implements OnInit {
  conductores: any[];

  constructor(private conductoresService: ConductoresService) {}

  ngOnInit(): void {
    this.conductoresService.getConductores().subscribe({
      next: (response) => (this.conductores = response),
      error: (error) => console.error(error),
    });
  }
}
