import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  nombre: string = 'Julian';
  private _edad: number = 32;

  get edad() {
    return this._edad;
  }

  saludar(numero : number) {
    if (numero <= 12) return 'buenos dias';
    else {
      return 'buenas tardes';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
