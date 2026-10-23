import { Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../../modelos/empleado';

@Component({
  imports: [],
  selector: 'app-listado',
  styleUrl: './listado.css',
  templateUrl: './listado.html',
})

export class Listado {

  @Output() mensajeEvento = new EventEmitter<Empleado>();
  enviarMnesaje(value: Empleado) {
    this.mensajeEvento.emit(value);
  }

  empleados: Empleado[] = [];

  constructor() {
    this.empleados = [
      {
        id: 1,
        nombre: 'Alomomola',
        edad: 39,
        email: 'alomomola@gmail.com',
        sueldo: 2400,
        activo: true,
        foto: 'https://www.robohash.org/'
      },
      {
        id: 2,
        nombre: 'Aurora',
        edad: 26,
        email: 'aurora@gmail.com',
        sueldo: 2500,
        activo: true,
        foto: 'https://www.robohash.org/'
      },
      {
        id: 3,
        nombre: 'Alexis',
        edad: 42,
        email: 'alexis@gmail.com',
        sueldo: 2600,
        activo: false,
        foto: 'https://www.robohash.org/'
      },
      {
        id: 4,
        nombre: 'Pimpinela',
        edad: 22,
        email: 'pimpinela@gmail.com',
        sueldo: 0,
        activo: false,
        foto: 'https://www.robohash.org/'
      }
    ];
  }
}
