import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Notice the correction here to `styleUrls`
})
export class HomeComponent implements OnInit {
  cookiesAccepted = false;
  showModal = false;

  ngOnInit(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted || cookiesAccepted !== 'true') {
      this.showModal = true;
    } else {
      this.cookiesAccepted = true;
    }
  }

  acceptCookies() {
    this.cookiesAccepted = true;
    localStorage.setItem('cookiesAccepted', 'true');
    this.showModal = false;
  }

  declineCookies() {
    this.cookiesAccepted = false;
    localStorage.removeItem('cookiesAccepted');
    this.showModal = false;
  }
  
  closeModal() {
    this.showModal = false;
  }
}
