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
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.auth.usuarioLogin(this.usuario).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.TOKEN);
        localStorage.setItem('id', JSON.stringify(res.USER.id) ),
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.err = err.error;
      },
    });
  }
}
