import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Propiedad } from '../models/propiedad.model';
import { PropiedadService } from '../services/propiedad.service';
import { CardPropiedadesComponent } from '../propiedades/cards-propiedades/cards-propiedades.component';
import { PropiedadModalComponent } from '../propiedades/propiedad-modal/propiedad-modal.component';
import Swal from 'sweetalert2';

interface FilterCriteria {
  location: string;
  maxPrice: number;
  type: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // Asegúrate de importar CommonModule aquí
    CardPropiedadesComponent,
    PropiedadModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propiedades: Propiedad[] = [];
  selectedPropiedad: Propiedad | null = null;
  cookiesAccepted = false;
  showModal = false;

  constructor(private service: PropiedadService) {}

  ngOnInit() {
    this.service.getPropiedadesNE(localStorage.getItem('id')).subscribe({
      next: (res: Propiedad[]) => {
        this.propiedades = res;
      },
      error: (err: any) => {
        console.error(err);
      }
    });

    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted || cookiesAccepted !== 'true') {
      this.showModal = true;
    } else {
      this.cookiesAccepted = true;
    }
  }

  openModal(propiedad: Propiedad) {
    this.selectedPropiedad = propiedad;
  }

  closeModal() {
    this.selectedPropiedad = null;
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
}
