import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  private apiUrl = 'http://localhost:3000/api/v1/google/autocomplete?input=';

  constructor(private http: HttpClient) {}

  getAutocomplete(input: string): Observable<any> {
    const url = `${this.apiUrl}${input.replace(/ /g, '%20')}`;
    console.log(`Fetching autocomplete for input: ${url}`);
    
    return this.http.get<any>(url);
  }
}
