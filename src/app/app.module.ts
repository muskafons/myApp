import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmpleadoHijoCaracteristicasComponent } from './empleado-hijo-caracteristicas/empleado-hijo-caracteristicas.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmpleadoHijoCaracteristicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioEmpleadoService, ServicioEmpleadosService], //Se colocan todos los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
