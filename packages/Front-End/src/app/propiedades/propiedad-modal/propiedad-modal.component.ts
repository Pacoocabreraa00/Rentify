import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../../models/propiedad.model';

@Component({
  selector: 'app-propiedad-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiedad-modal.component.html',
  styleUrls: ['./propiedad-modal.component.css']
})
export class PropiedadModalComponent implements OnInit, OnDestroy {
  @Input() propiedad!: Propiedad;
  @Output() close = new EventEmitter<void>();

  currentImageIndex = 0;
  intervalId: any;

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
    console.log(`Generating URL for image: ${imagePath}`);  // Debug log
    return `${baseUrl}${imagePath}`;
  }
  
  onImageError(event: Event) {
    console.error('Error loading image:', (event.target as HTMLImageElement).src);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 2000); // Cambia la imagen cada 3 segundos
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.propiedad.imagenes.length;
  }
}
