import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo-caracteristicas',
  templateUrl: './empleado-hijo-caracteristicas.component.html',
  styleUrls: ['./empleado-hijo-caracteristicas.component.css'],
})
export class EmpleadoHijoCaracteristicasComponent implements OnInit {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  agregarCaracteristica(value: string) {
    this.caracteristicasEmpleado.emit(value);
  }
}