import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../models/propiedad.model';
import { PropiedadService } from '../services/propiedad.service';
import { NgFor, NgIf } from '@angular/common';
import { CardPropiedadesComponent } from '../propiedades/cards-propiedades/cards-propiedades.component';
import { PropiedadModalComponent } from '../propiedades/propiedad-modal/propiedad-modal.component';

interface FilterCriteria {
  location: string;
  maxPrice: number;
  type: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, CardPropiedadesComponent, PropiedadModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  propiedades: Propiedad[] = [];
  selectedPropiedad: Propiedad | null = null;

  constructor(private service: PropiedadService) {}

  ngOnInit() {
    this.service.getPropiedadesNE(localStorage.getItem('id')).subscribe({
      next: (res: Propiedad[]) => {
        this.propiedades = res;
        // this.filteredPropiedades = res;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  openModal(propiedad: Propiedad) {
    this.selectedPropiedad = propiedad;
  }

  closeModal() {
    this.selectedPropiedad = null;
  }
}
