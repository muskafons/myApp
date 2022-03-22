import { Component } from '@angular/core';
import { Empleado } from './empleado.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  empleados: Empleado[] = [
    new Empleado('Julian', 'Fonseca', 'tecnico', 1000),
    new Empleado('Camilo', 'Fonseca', 'tecnico', 1500),
    new Empleado('Jaen', 'Rutts', 'auxiliar', 900),
    new Empleado('Marian', 'Reds', 'ingeniera', 1200),
  ];
  titulo = 'REGISTRO DE USUARIOS';
}
