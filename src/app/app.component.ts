import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = '';
  apellido: string = '';
  mensaje: string = '';
  cargo: string = '';

  registrado: boolean = false;

  color: string = '';
  colorFont: string = '';

  titulo = 'REGISTRO DE USUARIO';

  blogEntradas: any[];

  constructor() {
    this.blogEntradas = [
      { titulo: 'BLOG_1 Nada nuevo' },
      { titulo: 'BLOG_2 Descubrimiento de Virus T' },
      { titulo: 'BLOG_3 Nacion UMBRELLA' },
      { titulo: 'BLOG_4 Incidente en Rancoon City' },
      { titulo: 'BLOG_5 No new MWS...' },
    ];
  }

  registrar(): void {
    if (this.nombre == '' || this.apellido == '' || this.cargo == '') {
      this.registrado = true;
      this.color = 'bg-danger bg-gradient';
      this.colorFont = 'color: aliceblue';
      this.mensaje = 'Digite nombre, apellido y cargo !!!';
    } else {
      this.registrado = true;
      this.color = 'bg-success bg-gradient';
      this.colorFont = 'color: aliceblue';
      this.mensaje ="USUARIO: " + this.nombre;
    }
  }
}
