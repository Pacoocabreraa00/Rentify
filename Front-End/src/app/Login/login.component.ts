import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario = {
    email: '',
    password: '',
  };
  err: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('id')) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.auth.usuarioLogin(this.usuario).subscribe({
      next: (response) => {
        if ( response.id) {
          localStorage.setItem('id', response.id);
          this.router.navigate(['/']);
        } else {
          console.error('Login response missing token or ID. Check API response structure.');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.err = error.error || 'An error occurred during login.';
      },
    });
  }
  
}
