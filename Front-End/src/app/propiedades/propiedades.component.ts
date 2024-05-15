import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {
  propiedad: any; // Define la propiedad aquí

  constructor() {
    // Inicializa la propiedad aquí si es necesario
    this.propiedad = {};
  }
} 