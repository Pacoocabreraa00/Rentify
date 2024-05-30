import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface User {
  name?: string;
  email: string;
  password: string;
  nacionalidad?: string;
}

interface ApiResponse {
  id: string;
  [key: string]: any; // Para otras posibles propiedades
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signUpUrl = 'http://localhost:3000/api/v1/user/';
  private loginUrl = 'http://localhost:3000/api/v1/auth/';

  constructor(private http: HttpClient, private router: Router) {}

  usuarioLogin(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.loginUrl, user).pipe(
      catchError(this.handleError)
    );
  }

  signUpUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.signUpUrl, user).pipe(
      catchError(this.handleError)
    );
  }

  isLogged(): boolean {
    return !!localStorage.getItem('id');
  }

  logout(): void {
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
