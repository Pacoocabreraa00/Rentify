// src/app/models/propiedad.model.ts

export class Propiedad {
  id: string;
  nombre: string;
  tipo: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  pais: string;
  descripcion: string;
  habitaciones: number;
  banos: number;
  superficie: number;
  plantas: number;
  garaje: boolean;
  piscina: boolean;
  precioVenta: number;
  propietario: string;
  imagenes: string[];
  estado: string;
  fechaDisponibilidad: Date;

  constructor(
    id: string,
    nombre: string,
    tipo: string,
    direccion: string,
    ciudad: string,
    codigoPostal: string,
    pais: string,
    descripcion: string,
    habitaciones: number,
    banos: number,
    superficie: number,
    plantas: number,
    garaje: boolean,
    piscina: boolean,
    precioVenta: number,
    propietario: string,
    imagenes: string[],
    estado: string,
    fechaDisponibilidad: Date
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.codigoPostal = codigoPostal;
    this.pais = pais;
    this.descripcion = descripcion;
    this.habitaciones = habitaciones;
    this.banos = banos;
    this.superficie = superficie;
    this.plantas = plantas;
    this.garaje = garaje;
    this.piscina = piscina;
    this.precioVenta = precioVenta;
    this.propietario = propietario;
    this.imagenes = imagenes;
    this.estado = estado;
    this.fechaDisponibilidad = fechaDisponibilidad;
  }
}
