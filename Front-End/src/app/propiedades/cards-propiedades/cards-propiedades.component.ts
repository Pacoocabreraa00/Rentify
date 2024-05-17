import { Component, Input } from '@angular/core'; // Import the 'Propiedad' class from its file

@Component({
  selector: 'app-propiedad-card',
  templateUrl: './propiedad-card.component.html',
  styleUrls: ['./propiedad-card.component.css']
})

export class CardPropiedadesComponent {
    @Input() nombre: string;
    @Input() imagen: string;
    @Input() enlace: string;
    card = {nombre:'', imagen:'', enlace:''}
    goToLink() {
      window.location.href = this.enlace;
    }
  }
