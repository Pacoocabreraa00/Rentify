import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropiedadService {
  getPropiedadesUrl = 'http://localhost:3000/api/v1/propiedades';

  constructor(private http: HttpClient) {}
  getPropiedades(id: any) {
    return this.http.get<any>(this.getPropiedadesUrl+'/'+id);
  }
  postPropiedad(propiedad: any) {
    return this.http.post<any>(this.getPropiedadesUrl, propiedad);
  }
}
