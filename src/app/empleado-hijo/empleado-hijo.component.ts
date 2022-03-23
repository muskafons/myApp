import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.modelo';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css'],
})
export class EmpleadoHijoComponent implements OnInit {
  @Input() empleadoToHijo!: Empleado;
  //Toca quitar la sintaxis estricta en tsconfig.json
  //Tambien se puede agregar ! para evitar cambiar la configuración de sistaxis estricta

  arrayCaracteristica = [''];

  addCaracteristica(caracteristica: string) {
    this.arrayCaracteristica.push(caracteristica);
  }
  

  constructor() {}

  ngOnInit(): void {}
}
