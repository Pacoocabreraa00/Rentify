import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Propiedad } from '../../models/propiedad.model';
import { PropiedadService } from '../../services/propiedad.service';

@Component({
  selector: 'app-propiedad-modal-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './propiedad-modal-user.component.html',
  styleUrls: ['./propiedad-modal-user.component.css']
})
export class PropiedadModalComponentUser implements OnInit, OnDestroy {
  @Input() propiedad!: Propiedad;
  @Output() close = new EventEmitter<void>();

  currentImageIndex = 0;
  intervalId: any;
  editMode: { [key: string]: boolean } = {};
  constructor(private propiedadService: PropiedadService) {}

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  closeModal() {
    this.close.emit();
  }

  getImageUrl(imagePath: string): string {
    const baseUrl = 'http://localhost:3000/uploads/';
    console.log(`Generating URL for image: ${imagePath}`);
    return `${baseUrl}${imagePath}`;
  }
  
  onImageError(event: Event) {
    console.error('Error loading image:', (event.target as HTMLImageElement).src);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.propiedad.imagenes.length;
  }

  updatePropiedad() {
    console.log('Actualizando propiedad:', this.propiedad);
    this.propiedadService.updatePropiedad(this.propiedad).subscribe(
      response => {
        console.log('Propiedad actualizada exitosamente', response);
        this.closeModal();
        // Manejar éxito (por ejemplo, mostrar una notificación, cerrar el modal)
      },
      error => {
        console.error('Error al actualizar propiedad', error);
        // Manejar error (por ejemplo, mostrar un mensaje de error)
      }
    );
  }
  deletePropiedad() {
    if (confirm('Are you sure you want to delete this property?')) {
      const propiedadId = this.propiedad._id;
      if (!propiedadId) {
        console.error('Property ID is undefined');
        return;
      }
      this.propiedadService.deletePropiedad(propiedadId).subscribe(
        response => {
          console.log('Property deleted successfully', response);
          this.closeModal();
        },
        error => {
          console.error('Error deleting property', error);
        }
      );
    }
  }
  toggleEditMode(field: string) {
    this.editMode[field] = !this.editMode[field];
  }
}