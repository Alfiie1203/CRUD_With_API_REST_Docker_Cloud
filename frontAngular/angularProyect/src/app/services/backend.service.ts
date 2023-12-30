import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8000'; // Ajusta la URL según la ubicación de tu backend

  constructor(private http: HttpClient) {}

  getVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/ventas');
  }

  getVenta(ventaId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ventas/${ventaId}`);
  }

  createVenta(ventaData: any): Observable<any> {
    return this.http.post(this.baseUrl+'/ventas', ventaData);
  }

  updateVenta(ventaId: number, ventaData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/ventas/${ventaId}`, ventaData);
  }

  deleteVenta(ventaId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/ventas/${ventaId}`);
  }
}
