import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado-hijo-caracteristicas',
  templateUrl: './empleado-hijo-caracteristicas.component.html',
  styleUrls: ['./empleado-hijo-caracteristicas.component.css'],
})
export class EmpleadoHijoCaracteristicasComponent implements OnInit {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadoService) {}

  ngOnInit(): void {}

  agregarCaracteristica(value: string) {
    this.miServicio.muestraMensaje("caracteristica agregada")
    this.caracteristicasEmpleado.emit(value);
  }
}