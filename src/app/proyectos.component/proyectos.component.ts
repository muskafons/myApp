import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  mensaje: string = 'WELCOME';

  constructor(private router: Router, private servicio:ServicioEmpleadoService) {}

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario : number = 0;

  volver() {
    this.router.navigate(['']);
  }

  useServicio(){
    this.mensaje=this.servicio.addRegistro(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
    if(this.mensaje=="USUARIO REGISTRADO"){
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {}
}
