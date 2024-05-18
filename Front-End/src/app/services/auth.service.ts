import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'http://localhost:3000/api/v1/user/'
  private loginUrl = 'http://localhost:3000/api/v1/auth/'

  constructor(private http: HttpClient, private router: Router) {}
  usuarioLogin(user: any) {return this.http.post<any>(this.loginUrl, user)}
  signUpUser(user: any){return this.http.post<any>(this.signUpUrl, user)}

  
  

  isLogged(): boolean {
    return !!localStorage.getItem('id');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
}
