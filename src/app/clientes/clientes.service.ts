// Servicio para interactuar con el backend de clientes
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  getAllClientes(): any {
    return this.http.get(this.apiUrl);
  }

  getClienteById(id: string): any {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCliente(cliente: any): any {
    return this.http.post(this.apiUrl, cliente);
  }

  updateCliente(id: string, cliente: any): any {
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }

  deleteCliente(id: string): any {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
