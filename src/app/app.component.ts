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

  registrado: boolean = false;

  color: string = '';
  colorFont: string = '';

  titulo = 'REGISTRO DE USUARIO';

  registrar(): void {
    if (this.nombre == '' || this.apellido == '') {
      this.registrado = true;
      this.color = 'bg-danger bg-gradient';
      this.colorFont = 'color: aliceblue';
      this.mensaje = 'Digite nombre y apellido !!!';
    } else {
      this.registrado = true;
      this.color = 'bg-success bg-gradient';
      this.colorFont = 'color: aliceblue';
      this.mensaje =
        this.nombre + ' ' + this.apellido + ' registrado con exito';
    }
  }
}
