import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../../services/propiedad.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router } from '@angular/router';

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.css']
})
export class CrearPropiedadComponent  {
  propiedad = {
    nombre: '',
    tipo: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    pais: '',
    descripcion: '',
    habitaciones: '',
    banos: '',
    superficie: '',
    plantas: '',
    garaje: false,
    piscina: false,
    precioVenta: '',
    imagenes: 'imagen de ejemplo',
    estado: '',
    fechaDisponibilidad: ''
  };
  selectedFiles: File[] = [];

  constructor(private service: PropiedadService, private router:Router) {}

  

  createPropiedad() {

    this.service.postPropiedad(this.propiedad).subscribe({
      next: (res) => {
        this.router.navigate(['/propiedades']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    this.handleFiles(files);
  }

  handleFiles(files: FileList) {
    this.selectedFiles = Array.from(files);
  }

  formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
