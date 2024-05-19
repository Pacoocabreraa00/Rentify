// src/app/propiedades/propiedades.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropiedadService } from '../services/propiedad.service';
import { CardPropiedadesComponent } from './cards-propiedades/cards-propiedades.component';
import { Propiedad } from '../models/propiedad.model';
import { PropiedadModalComponent } from './propiedad-modal/propiedad-modal.component';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule, RouterModule, CardPropiedadesComponent, PropiedadModalComponent],
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {
  propiedades: Propiedad[] = [];
  selectedPropiedad: Propiedad | null = null;

  constructor(private service: PropiedadService) { }

  ngOnInit() {
    this.service.getPropiedades(localStorage.getItem('id')).subscribe({
      next: (res: Propiedad[]) => {
        this.propiedades = res;
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
