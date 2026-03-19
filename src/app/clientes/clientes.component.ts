// Componente para mostrar la lista de clientes
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  template: `
    <h1>Clientes</h1>
    <ul>
      <li *ngFor="let cliente of clientes">{{ cliente.nombre }} {{ cliente.apellido }}</li>
    </ul>
  `
})
export class ClientesComponent implements OnInit {
  clientes = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}
