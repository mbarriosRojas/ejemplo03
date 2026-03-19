// Componente para crear y editar clientes
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-cliente-form',
  template: `
    <h1>Formulario de Cliente</h1>
    <form (ngSubmit)="onSubmit()">
      <label>Nombre:</label>
      <input type="text" [(ngModel)]="cliente.nombre">
      <br>
      <label>Apellido:</label>
      <input type="text" [(ngModel)]="cliente.apellido">
      <br>
      <label>Correo:</label>
      <input type="email" [(ngModel)]="cliente.correo">
      <br>
      <label>Teléfono:</label>
      <input type="text" [(ngModel)]="cliente.telefono">
      <br>
      <label>Dirección:</label>
      <input type="text" [(ngModel)]="cliente.direccion">
      <br>
      <button type="submit">Guardar</button>
    </form>
  `
})
export class ClienteFormComponent implements OnInit {
  cliente = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: ''
  };

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.clienteService.createCliente(this.cliente).subscribe((cliente) => {
      console.log(cliente);
    });
  }
}
