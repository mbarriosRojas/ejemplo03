import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConductoresService {

  private apiUrl = 'http://localhost:3000/conductores';

  constructor(private http: HttpClient) { }

  getConductores() {
    return this.http.get(this.apiUrl);
  }

  saveConductor(conductor: any) {
    return this.http.post(this.apiUrl, conductor);
  }

  deleteConductor(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
