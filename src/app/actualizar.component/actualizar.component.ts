import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../Empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent implements OnInit {
  mensaje: string = 'WELCOME';
  indice: number = this.route.snapshot.params['id']; //recoje el "id" enviado desde <a> con home.component </a>;
  
  valor:number = this.route.snapshot.queryParams['valor'];
  mensajeValor:string = '';
  
  empleado: Empleado = this.servicio.empleados[this.indice];

  constructor(
    private router: Router,
    private servicio: ServicioEmpleadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if(this.valor==1){
      this.mensajeValor="actualizar";
    }
    else if(this.valor==2){
      this.useServicioEliminar();
    }
  }

  cuadroNombre: string =    this.empleado.nombre;
  cuadroApellido: string =  this.empleado.apellido;
  cuadroCargo: string =     this.empleado.cargo;
  cuadroSalario: number =   this.empleado.salario;

  useServicioActualizar() {
   this.servicio.empleados[this.indice].nombre=this.cuadroNombre;
   this.servicio.empleados[this.indice].apellido=this.cuadroApellido;
   this.servicio.empleados[this.indice].cargo=this.cuadroCargo;
   this.servicio.empleados[this.indice].salario=this.cuadroSalario;
    this.router.navigate(['']);
  }

  useServicioEliminar() {
    this.servicio.empleados.splice(this.indice,1);
     this.router.navigate(['']);
   }

   useServicioAccion(){
     this.useServicioActualizar();
   }

}
