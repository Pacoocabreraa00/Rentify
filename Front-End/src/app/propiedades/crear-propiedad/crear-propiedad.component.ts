import { Component } from '@angular/core';
import { PropiedadService } from '../../services/propiedad.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Propiedad } from '../../models/propiedad.model';

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.css']
})
export class CrearPropiedadComponent {
  propiedad = new Propiedad(
    '', // id
    '', // nombre
    '', // tipo
    '', // direccion
    '', // ciudad
    '', // codigoPostal
    '', // pais
    '', // descripcion
    0, // habitaciones
    0, // banos
    0, // superficie
    0, // plantas
    false, // garaje
    false, // piscina
    0, // precioVenta
    localStorage.getItem('id')||'', // propietario
    ['imagen de ejemplo'], // imagenes
    '', // estado
    new Date() // fechaDisponibilidad
  );
  selectedFiles: File[] = [];

  constructor(private service: PropiedadService, private router: Router) {}

  createPropiedad() {
    // Convertir la fecha de disponibilidad a un objeto Date
    this.propiedad.fechaDisponibilidad = new Date(this.propiedad.fechaDisponibilidad);

    console.log(this.propiedad);
    this.service.postPropiedad(this.propiedad).subscribe({
      next: (res: any) => {
      this.router.navigate(['/propiedades']);
      },
      error: (err: any) => {
      console.log(err);
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    // Procesar los archivos seleccionados según sea necesario
  }
}
