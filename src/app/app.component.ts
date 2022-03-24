import { Component } from '@angular/core';
import { Empleado } from './empleado.modelo';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private miServicio: ServicioEmpleadoService,
    private miServicio2: ServicioEmpleadosService
  ) {}

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  mensaje = 'Registro de Usuarios';
  mensaje2 = "Registro de Usuarios USANDO SERVICIOS";
  titulo = 'REGISTRO DE USUARIOS';

  empleadosServicio : Empleado[] = this.miServicio2.empleados;

useServicio(){
  this.mensaje2 = this.miServicio2.addRegistro(
    this.cuadroNombre,
    this.cuadroApellido,
    this.cuadroCargo,
    this.cuadroSalario
  );

}



  //-------------------------------
  empleados: Empleado[] = [
    new Empleado('Julian', 'Fonseca', 'tecnico', 1000),
    new Empleado('Camilo', 'Fonseca', 'tecnico', 1500),
    new Empleado('Jaen', 'Rutts', 'auxiliar', 900),
    new Empleado('Marian', 'Reds', 'ingeniera', 1200),
  ];

  addRegistro() {
    if (
      this.cuadroNombre == '' ||
      this.cuadroCargo == '' ||
      this.cuadroApellido == '' ||
      this.cuadroSalario == 0
    ) {
      this.mensaje = 'POR FAVOR COMPLETE LOS CAMPOS';
      this.miServicio.muestraMensaje(this.mensaje);
    } else {
      let empleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );
      this.empleados.push(empleado);
      this.mensaje = 'USUARIO REGISTRADO';
      this.miServicio.muestraMensaje(this.mensaje);
      this.cuadroNombre = '';
      this.cuadroApellido = '';
      this.cuadroCargo = '';
      this.cuadroSalario = 0;
    }
  }
  //-------------------------------
}
