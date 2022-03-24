import { Injectable } from '@angular/core';
import { Empleado } from './empleado.modelo';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadosService {

  
  constructor(private miServicio3:ServicioEmpleadoService) {}

  empleados: Empleado[] = [
    new Empleado('William', 'Birkin', 'Bioterrorist', 1000),
    new Empleado('Chrish', 'Randfield', 'SecurityOfficer', 1500),
    new Empleado('Jill', 'Valentine', 'Greatgirl', 900),
    new Empleado('Sonia', 'Blade', 'NinjaWarrior', 1200),
  ];

  addRegistro(cuadroNombre: string, cuadroApellido: string,cuadroCargo: string,cuadroSalario: number):string {
    if (
      cuadroNombre == '' ||
      cuadroCargo == '' ||
      cuadroApellido == '' ||
      cuadroSalario == 0
    ) {
    this.miServicio3.muestraMensaje("Por favor complete los campos");

      return 'POR FAVOR COMPLETE LOS CAMPOS';
    } else {
      let empleado = new Empleado(
        cuadroNombre,
        cuadroApellido,
        cuadroCargo,
        cuadroSalario
      );
      this.empleados.push(empleado);
      this.miServicio3.muestraMensaje("Usuario registraod Ohh.. Gt");
      return 'USUARIO REGISTRADO';
    }
  }



}
