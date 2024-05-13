import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  usuario = {
    nombre: '',
    email: '',
    password: '',
    nacionalidad: '',
  };
  err: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.usuarioLogin(this.usuario).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.TOKEN);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.err = err.error;
      },
    });
}}
