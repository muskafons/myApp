import { Injectable } from '@angular/core';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadoService {
  constructor() {}

  empleados: Empleado[] = [
    new Empleado('William', 'Birkin', 'Bioterrorist', 1000),
    new Empleado('Chrish', 'Randfield', 'SecurityOfficer', 1500),
    new Empleado('Jill', 'Valentine', 'Greatgirl', 900),
    new Empleado('Sonia', 'Blade', 'NinjaWarrior', 1200),
  ];

  addRegistro(cuadroNombre: string, cuadroApellido: string, cuadroCargo: string,cuadroSalario: number): string {
    if (cuadroNombre == '' || cuadroCargo == '' || cuadroApellido == '' || cuadroSalario == 0)
    {
      return 'POR FAVOR COMPLETE LOS CAMPOS';
    } 
    else {
      let empleado = new Empleado(
        cuadroNombre,
        cuadroApellido,
        cuadroCargo,
        cuadroSalario
      );
      this.empleados.push(empleado);
      return 'USUARIO REGISTRADO';
    }
  }
}
