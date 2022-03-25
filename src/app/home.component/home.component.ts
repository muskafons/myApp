import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mensaje = 'Registro de Usuarios';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario : number = 0;

  empleadosServicio = this.servicio.empleados;

  useServicio(){
    this.mensaje=this.servicio.addRegistro(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }

  constructor(private servicio:ServicioEmpleadoService) {}

  ngOnInit(): void {}
}
