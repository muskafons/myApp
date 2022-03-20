import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  saludo = '';
  saludo2 = 'EVENT BINDING';
  saludo3 = "";
  saludo4 = "";
  saludo5 = "mensaje inicial..."; //Bidireccional
  title = 'appBase';
  habilitacion = true;
  checked = false;
  radioButtonSi = "si";
  radioButtonNo = "no";


  eventoAntro2(valor:string){
    if(valor=="si"){
      this.saludo4="HA SELECCIONADO SI";
    }
    else if(valor=="no"){
      this.saludo4="HA SELECCIONADO NO";
    }

  }

  eventoAntro(evento:Event){
    if((<HTMLInputElement>evento.target).value=="si"){
      this.saludo3="HA SELECCIONADO SI";
    }
    else if((<HTMLInputElement>evento.target).value=="no"){
      this.saludo3="HA SELECCIONADO NO";
    }

  }

  putMensaje(valor: string): void {
    this.saludo = valor;
  }

  checkThis(): void {
    if (this.habilitacion == true) {
      this.habilitacion = false;
    } else {
      this.habilitacion = true;
    }
  }

  alerteEste() {
    this.checked = !this.checked;

    if(this.checked==false){
      this.saludo2 = "EVENT BINDING";
    }
    else{
      this.saludo2 = "LIKE THIS";
    }

    // if (opt == 0) {
    //   alert('NO NEW MESSAGES!!!!');
    // } else if (opt == 1) {
    //   if (propiedadCheckBox == 'on') {
    //     this.saludo2 = 'MISSION START';
    //   } else {
    //     this.saludo2 = 'EVENT BINDING';
    //   }

    //   // this.saludo2 = 'CREO QUE NUNCA LO PODRE SABER...';
    // } else {
    //   alert('BYE');
    // }
  }
}
