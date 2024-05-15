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

  signUp() {
    console.log(this.usuario.name)
    this.auth.signUpUser(this.usuario)
      .subscribe(
        {
          next: (res: any) => {
            console.log(res);
            localStorage.setItem('token', res.TOKEN);
            this.router.navigate(['/']);
          },
          error: (err) => {
            this.err = err.error.error;
            console.log(err);
          }
        }
      )
  }
}
