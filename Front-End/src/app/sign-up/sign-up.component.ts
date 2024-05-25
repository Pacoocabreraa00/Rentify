import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  usuario = {
    name: '',
    email: '',
    password: '',
    nacionalidad: '',
  };
  err: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('id')) {
      this.router.navigate(['/']);
    }
  }

  signUp() {
    this.auth.signUpUser(this.usuario).subscribe({
      next: (response) => {
        console.log('Response from sign-up:', response); // Agrega esta línea para depurar
        if (response.id) {
          localStorage.setItem('id', response.id);
          this.router.navigate(['/']);
        } else {
          console.error('Sign-up response missing ID. Check API response structure.');
        }
      },
      error: (error) => {
        console.error('Sign-up failed:', error);
        this.err = error.error || 'An error occurred during sign-up.';
      },
    });
  }
}
