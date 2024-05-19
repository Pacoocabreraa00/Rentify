// src/app/propiedades/propiedad-modal/propiedad-modal.component.ts
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
}
