import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'http://localhost:3000/api/v1/user/';
  private loginUrl = 'http://localhost:3000/api/v1/auth/';

  constructor(private http: HttpClient, private router: Router) {}

  signUpUser(user: any): Observable<any> {
    return this.http.post<any>(this.signUpUrl, user);
  }

  usuarioLogin(user: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, user).pipe(
      map((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', user.email); // Opcional: almacenar email del usuario
        }
        return response;
      })
    );
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
