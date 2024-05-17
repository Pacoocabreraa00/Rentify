import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {
  propiedad: any; // Define la propiedad aquí
  albums: any[] = []
  album = {
    name: '',
    artist: '',
    date: '',
    picture: '',
    link: ''
  }

  
  constructor(private service: PropiedadService) { }

  ngOnInit() {
     this.service.getPropiedades(localStorage.getItem('id')) // Cambiar por el id del usuario
      .subscribe({
        next: (res) => {
          this.albums = res
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
} 