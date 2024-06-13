import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../models/propiedad.model';
import { PropiedadService } from '../services/propiedad.service';
import { CardPropiedadesComponent } from '../propiedades/cards-propiedades/cards-propiedades.component';
import { PropiedadModalComponent } from '../propiedades/propiedad-modal/propiedad-modal.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listado-propiedades',
  standalone: true,
  imports: [
    CommonModule,
    CardPropiedadesComponent,
    PropiedadModalComponent,
    FormsModule
  ],
  templateUrl: './listado-propiedades.component.html',
  styleUrls: ['./listado-propiedades.component.css']
})
export class ListadoPropiedadesComponent implements OnInit {
  propiedades: Propiedad[] = [];
  selectedPropiedad: Propiedad | null = null;
  searchTerm: string = '';


  constructor(private service: PropiedadService) {}

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties(): void {
    this.service.getPropiedadesNE(localStorage.getItem('id')).subscribe({
      next: (res: Propiedad[]) => {
        this.propiedades = res;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  searchProperties(): void {
    if (this.searchTerm.trim()) {
      this.service.searchPropiedades(this.searchTerm).subscribe({
        next: (res: Propiedad[]) => {
          this.propiedades = res;
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    } else {
      this.loadProperties();
    }
  }

  openModal(propiedad: Propiedad): void {
    this.selectedPropiedad = propiedad;
  }

  closeModal(): void {
    this.selectedPropiedad = null;
  }
}
