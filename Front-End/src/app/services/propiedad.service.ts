import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Propiedad } from '../models/propiedad.model';

@Injectable({
  providedIn: 'root',
})
export class PropiedadService {
  private apiUrl = 'http://localhost:3000/api/v1/propiedad';

  constructor(private http: HttpClient) {}

  getPropiedades(userId: string | null): Observable<Propiedad[]> {
    console.log(`Solicitando propiedad con ID: ${userId}`);
    return this.http.get<Propiedad[]>(`${this.apiUrl}/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  postPropiedad(propiedad: FormData): Observable<Propiedad> {
    return this.http.post<Propiedad>(this.apiUrl, propiedad).pipe(
      catchError(this.handleError)
    );
  }

  getPropiedadesNE(userId: string | null): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/exclude/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  updatePropiedad(propiedad: Propiedad): Observable<Propiedad> {
    const formData = new FormData();
    (Object.keys(propiedad) as (keyof Propiedad)[]).forEach(key => {
      if (key !== 'imagenes') {
        const value = propiedad[key];
        if (Array.isArray(value)) {
          (value as string[]).forEach((item: string) => {
            formData.append(key, item);
          });
        } else if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      }
    });

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    return this.http.put<Propiedad>(`${this.apiUrl}/${propiedad._id}`, formData).pipe(
      catchError(this.handleError)
    );
  }

  deletePropiedad(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
