import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = "http://localhost:3000/api/v1/user"

  private loginUpUrl = "http://localhost:3000/api/v1/auth"

  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user:any) {
    return this.http.post<any>(this.signUpUrl,user)
  }
  usuarioLogin(user:any) {
    return this.http.post<any>(this.loginUpUrl,user)
  }
  //Comprobamos si el token esta guardado en el local Storage para saber si ha iniciado sesion
  isLogged() {
    console.log(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.router.navigate(['/login'])
  }
}
