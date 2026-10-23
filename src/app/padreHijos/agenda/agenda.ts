import { Component } from '@angular/core';
import { Listado } from '../listado/listado';
import { Detalles } from '../detalles/detalles';
import { Empleado } from '../../modelos/empleado';

@Component({
  imports: [Listado, Detalles],
  selector: 'app-agenda',
  styleUrl: './agenda.css',
  templateUrl: './agenda.html',
})
export class Agenda {
  empleado: Empleado | null = null;

  recibirMensaje($event: Empleado) {
    this.empleado = $event;
  }
}
