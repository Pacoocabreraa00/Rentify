import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../../models/propiedad.model';

@Component({
  selector: 'app-propiedad-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiedad-modal.component.html',
  styleUrls: ['./propiedad-modal.component.css']
})
export class PropiedadModalComponent {
  @Input() propiedad!: Propiedad;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  getImageUrl(imagePath: string): string {
    // Asegúrate de que esta URL base apunte al lugar correcto donde se almacenan tus imágenes
    const baseUrl = 'http://localhost:3000/uploads/';
    return `${baseUrl}${imagePath}`;
  }
}
