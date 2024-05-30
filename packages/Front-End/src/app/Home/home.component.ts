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
  // filteredPropiedades: Propiedad[] = [];
  selectedPropiedad: Propiedad | null = null;
  
  // filterCriteria: FilterCriteria = {
  //   location: '',
  //   maxPrice: 0,
  //   type: ''
  // };

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

  // applyFilter() {
  //   this.filteredPropiedades = this.propiedades.filter(propiedad => {
  //     const matchesLocation = this.filterCriteria.location ? propiedad.location.includes(this.filterCriteria.location) : true;
  //     const matchesPrice = this.filterCriteria.maxPrice ? propiedad.price <= this.filterCriteria.maxPrice : true;
  //     const matchesType = this.filterCriteria.type ? propiedad.type === this.filterCriteria.type : true;

  //     return matchesLocation && matchesPrice && matchesType;
  //   });
  // }
}
