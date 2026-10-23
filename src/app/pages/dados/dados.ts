import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dados',
  styleUrl: './dados.css',
  templateUrl: './dados.html',
})
export class ComponenteDado {
  valor = Math.floor(Math.random()*6) +1;
  valor2 = Math.floor(Math.random()*6) +1;
  valor3 = Math.floor(Math.random()*6) +1;
  ganar = false;

  tirar(){
    this.valor = Math.floor(Math.random()*6) +1;
    this.valor2 = Math.floor(Math.random()*6) +1;
    this.valor3 = Math.floor(Math.random()*6) +1;

    if ((this.valor == this.valor2) && this.valor2 == this.valor3) {
      this.ganar = true;
    } else {
      this.ganar = false;
    }
  }
}

