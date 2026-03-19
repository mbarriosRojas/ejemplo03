import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  private apiUrl = 'http://localhost:3000/api/conductores';

  constructor(private http: HttpClient) { }

  getConductores() {
    return this.http.get(this.apiUrl);
  }

  createConductor(conductor: any) {
    return this.http.post(this.apiUrl, conductor);
  }

  updateConductor(conductor: any) {
    return this.http.put(`${this.apiUrl}/${conductor.id}`, conductor);
  }

  deleteConductor(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  asignarVehiculo(conductorId: number, vehiculoId: number) {
    return this.http.put(`${this.apiUrl}/${conductorId}/asignar-vehiculo`, { vehiculoId });
  }
}
