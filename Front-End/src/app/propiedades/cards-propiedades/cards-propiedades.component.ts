// src/app/propiedades/cards-propiedades/cards-propiedades.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Propiedad } from '../../models/propiedad.model';

@Component({
  selector: 'app-propiedad-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cards-propiedades.component.html',
  styleUrls: ['./cards-propiedades.component.css'],
})
export class CardPropiedadesComponent {
  @Input() propiedad!: Propiedad;
  @Output() readMore = new EventEmitter<void>();

  onReadMore() {
    this.readMore.emit();
  }
}
