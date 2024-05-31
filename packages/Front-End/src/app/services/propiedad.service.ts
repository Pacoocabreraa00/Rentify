import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propiedad } from '../models/propiedad.model';

@Injectable({
  providedIn: 'root',
})
export class PropiedadService {
  private apiUrl = 'http://localhost:3000/api/v1/propiedad';

  constructor(private http: HttpClient) {}

  getPropiedades(userId: string | null): Observable<Propiedad[]> {
    console.log(`Solicitando propiedad con ID: ${userId}`); 
    return this.http.get<Propiedad[]>(`${this.apiUrl}/${userId}`);
  }

  postPropiedad(propiedad: FormData): Observable<Propiedad> {
    return this.http.post<Propiedad>(this.apiUrl, propiedad);
  }

  getPropiedadesNE(userId: string | null): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/exclude/${userId}`);
  }

  updatePropiedad(propiedad: Propiedad): Observable<Propiedad> {
    const formData = new FormData();
    (Object.keys(propiedad) as (keyof Propiedad)[]).forEach(key => {
      if (Array.isArray(propiedad[key])) {
        (propiedad[key] as string[]).forEach((item: string) => {
          formData.append(key, item);
        });
      } else {
        formData.append(key, propiedad[key] as any);
      }
    });
  
    return this.http.put<Propiedad>(`${this.apiUrl}/${propiedad._id}`, formData);
  }
  
  

  deletePropiedad(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
