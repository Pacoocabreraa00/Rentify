import { Component } from '@angular/core';
import { PropiedadService } from '../../services/propiedad.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Propiedad } from '../../models/propiedad.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AutocompleteService } from '../../services/autocomplete.service';
import { Observable, of } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';

interface Term {
  offset: number;
  value: string;
}

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.css']
})
export class CrearPropiedadComponent {
  propiedad = new Propiedad(
    '', '', '', '', '', '', '', '', null, null, null, null, null, null, null, localStorage.getItem('id') || '', [], '', new Date()
  );
  selectedFiles: File[] = [];
  searchControl = new FormControl();
  filteredOptions: Observable<any[]> = of([]);  // Inicializar con un observable de array vacío

  constructor(
    private propiedadService: PropiedadService,
    private router: Router,
    private autocompleteService: AutocompleteService
  ) {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => {
        if (value && value.length > 0) {
          return this.autocompleteService.getAutocomplete(value).pipe(
            map(response => response.predictions || []),
            catchError(() => of([]))
          );
        } else {
          return of([]); // Devolver un array vacío si el input está vacío
        }
      })
    );

    this.filteredOptions.subscribe(data => {
      console.log('Autocomplete options:', data);
    });
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    if (inputValue && inputValue.length > 0) {
      this.filteredOptions = this.autocompleteService.getAutocomplete(inputValue).pipe(
        map(response => response.predictions || []),
        catchError(() => of([]))
      );
    } else {
      this.filteredOptions = of([]);
    }
  }

  selectOption(option: any) {
    this.propiedad.direccion = option.description;

    // Autocompletar otros campos necesarios
    const terms: Term[] = option.terms;
    this.propiedad.ciudad = terms.find((term: Term) => term.offset === 28)?.value || '';
    this.propiedad.codigoPostal = terms.find((term: Term) => term.offset === 22)?.value || '';
    this.propiedad.pais = terms.find((term: Term) => term.offset === 54)?.value || '';

    // Vaciar el control de búsqueda para eliminar la lista de autocompletado
    this.searchControl.setValue('');

    // Marcar los campos como llenos
    this.markFieldsAsFilled();
  }

  markFieldsAsFilled() {
    const direccionField = document.getElementById('direccionField');
    const ciudadField = document.getElementById('ciudadField');
    const codigoPostalField = document.getElementById('codigoPostalField');
    const paisField = document.getElementById('paisField');

    if (direccionField) direccionField.classList.add('filled');
    if (ciudadField) ciudadField.classList.add('filled');
    if (codigoPostalField) codigoPostalField.classList.add('filled');
    if (paisField) paisField.classList.add('filled');
  }

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

    this.propiedadService.postPropiedad(formData).subscribe({
      next: (res: any) => {
        this.router.navigate(['/propiedades']);
      },
      error: (err: HttpErrorResponse) => {
        console.error(`Backend returned code ${err.status}, body was:`, err.error);
      }
    });
  }
}
