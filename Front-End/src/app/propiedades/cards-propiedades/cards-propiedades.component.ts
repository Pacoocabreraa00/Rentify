// src/app/propiedades/cards-propiedades/cards-propiedades.component.ts
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Propiedad } from '../../models/propiedad.model'; // Asegúrate de importar la clase Propiedad

@Component({
  selector: 'app-propiedad-card', // Asegúrate de que este es el selector correcto
  standalone: true,
  imports: [NgIf],
  templateUrl: './cards-propiedades.component.html',
  styleUrls: ['./cards-propiedades.component.css']
})
export class CardPropiedadesComponent {
  @Input() propiedad!: Propiedad;
}
