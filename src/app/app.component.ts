import { Component } from '@angular/core';
import { Empleado } from './empleado.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

mensaje="Registro de Usuarios";

titulo = 'REGISTRO DE USUARIOS';

  empleados: Empleado[] = [
    new Empleado('Julian', 'Fonseca', 'tecnico', 1000),
    new Empleado('Camilo', 'Fonseca', 'tecnico', 1500),
    new Empleado('Jaen', 'Rutts', 'auxiliar', 900),
    new Empleado('Marian', 'Reds', 'ingeniera', 1200),
  ];

  addRegistro(){
    if (this.cuadroNombre==""||this.cuadroCargo==""||this.cuadroApellido==""||this.cuadroSalario==0) {
      this.mensaje = "POR FAVOR COMPLETE LOS CAMPOS";
    }
    else{
      let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleados.push(empleado);
      this.mensaje = "USUARIO REGISTRADO"
      this.cuadroNombre = "";
      this.cuadroApellido = "";
      this.cuadroCargo = "";
      this.cuadroSalario = 0;

    }

 
  }

}
