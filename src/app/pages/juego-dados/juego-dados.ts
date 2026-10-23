import { Component, signal } from '@angular/core';
import { ComponenteDado } from '../dados/dados';

@Component({
  imports: [ComponenteDado],
  selector: 'app-juego-dados',
  styleUrl: './juego-dados.css',
  templateUrl: './juego-dados.html',
})
export class JuegoDadosComponent {
  protected readonly title = signal('proyecto_Dado');
}