import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component/home.component';
import { QuienesComponent } from './quienes.component/quienes.component';
import { ContactosComponent } from './contactos.component/contactos.component';
import { ProyectosComponent } from './proyectos.component/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { ActualizarComponent } from './actualizar.component/actualizar.component';
import { ErrorComponent } from './error.component/error.component';

const Rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'actualizar/:id', component: ActualizarComponent },
  {path: '**',component: ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesComponent,
    ContactosComponent,
    ProyectosComponent,
    ActualizarComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule.forRoot(Rutas)],
  providers: [ServicioEmpleadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
