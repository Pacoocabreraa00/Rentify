import { Component } from '@angular/core';
import { PropiedadService } from '../../services/propiedad.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Propiedad } from '../../models/propiedad.model';
import { HttpErrorResponse } from '@angular/common/http';

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
    null, // habitaciones
    null, // banos
    null, // superficie
    null, // plantas
    null, // garaje
    null, // piscina
    null, // precioVenta
    localStorage.getItem('id') || '', // propietario
    [], // imagenes
    '', // estado
    new Date() // fechaDisponibilidad
  );
  selectedFiles: File[] = [];

  constructor(private service: PropiedadService, private router: Router) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropzone = document.getElementById('dropzone');
    if (dropzone) {
      dropzone.classList.add('border-blue-500', 'border-2');
    }
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropzone = document.getElementById('dropzone');
    if (dropzone) {
      dropzone.classList.remove('border-blue-500', 'border-2');
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropzone = document.getElementById('dropzone');
    if (dropzone) {
      dropzone.classList.remove('border-blue-500', 'border-2');
    }
    if (event.dataTransfer) {
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  handleFiles(files: FileList) {
    this.selectedFiles = Array.from(files);
  }

  formatBytes(bytes: number) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  createPropiedad() {
    this.propiedad.fechaDisponibilidad = new Date(this.propiedad.fechaDisponibilidad);

    const formData: FormData = new FormData();
    formData.append('nombre', this.propiedad.nombre);
    formData.append('tipo', this.propiedad.tipo);
    formData.append('direccion', this.propiedad.direccion);
    formData.append('ciudad', this.propiedad.ciudad);
    formData.append('codigoPostal', this.propiedad.codigoPostal);
    formData.append('pais', this.propiedad.pais);
    formData.append('descripcion', this.propiedad.descripcion);
    formData.append('habitaciones', this.propiedad.habitaciones?.toString() || '');
    formData.append('banos', this.propiedad.banos?.toString() || '');
    formData.append('superficie', this.propiedad.superficie?.toString() || '');
    formData.append('plantas', this.propiedad.plantas?.toString() || '');
    formData.append('precioVenta', this.propiedad.precioVenta?.toString() || '');
    formData.append('garaje', this.propiedad.garaje?.toString() || '');
    formData.append('piscina', this.propiedad.piscina?.toString() || '');
    formData.append('estado', this.propiedad.estado);
    formData.append('fechaDisponibilidad', this.propiedad.fechaDisponibilidad.toISOString());
    formData.append('propietario', this.propiedad.propietario);

    for (const file of this.selectedFiles) {
      formData.append('propertyImages', file, file.name);
    }

    this.service.postPropiedad(formData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/propiedades']);
      },
      error: (err: HttpErrorResponse) => {
        console.error(`Backend returned code ${err.status}, body was:`, err.error);
      }
    });
  }
}
