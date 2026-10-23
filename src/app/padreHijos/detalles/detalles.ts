import { Component, Input, input } from '@angular/core';
import { Empleado } from '../../modelos/empleado';

@Component({
  imports: [],
  selector: 'app-detalles',
  styleUrl: './detalles.css',
  templateUrl: './detalles.html',
})
export class Detalles {
  // empleado: Empleado | null = null;
  @Input() valor: Empleado | null = null;

  /*
  *constructor() {
  this.empleado = {
    id: 1,
    nombre: 'Alomomola',
    edad: 39,
    email: 'alomomola@gmail.com',
    sueldo: 2400,
    activo: true,
    foto: 'https://www.robohash.org/'
  };
  this.valor = {
     id: 1,
    nombre: 'Alomomola',
    edad: 39,
    email: 'alomomola@gmail.com',
    sueldo: 2400,
    activo: true,
    foto: 'https://www.robohash.org/'
  }
  */
}

