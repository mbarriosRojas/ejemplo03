// Componente para mostrar la lista de clientes
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-cliente-list',
  template: `
    <h1>Lista de Clientes</h1>
    <ul>
      <li *ngFor="let cliente of clientes">{{ cliente.nombre }} {{ cliente.apellido }}</li>
    </ul>
  `
})
export class ClienteListComponent implements OnInit {
  clientes = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}
