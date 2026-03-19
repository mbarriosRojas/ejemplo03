import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../viajes.service';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent implements OnInit {
  viajes = [];

  constructor(private viajesService: ViajesService) { }

  ngOnInit(): void {
    this.viajesService.getViajes().subscribe(viajes => {
      this.viajes = viajes;
    });
  }

}
