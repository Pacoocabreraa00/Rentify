import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './Login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from "./common/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, HeaderComponent, LoginComponent, SignUpComponent, FooterComponent]
})
export class AppComponent {
  title = 'Front-End';
}
