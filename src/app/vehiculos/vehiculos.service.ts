import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private apiUrl = 'http://localhost:3000/api/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos() {
    return this.http.get(this.apiUrl);
  }

  createVehiculo(vehiculo: any) {
    return this.http.post(this.apiUrl, vehiculo);
  }

  updateVehiculo(vehiculo: any) {
    return this.http.put(`${this.apiUrl}/${vehiculo.id}`, vehiculo);
  }

  deleteVehiculo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
