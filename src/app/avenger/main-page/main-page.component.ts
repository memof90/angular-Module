import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Iroman',
    poder: 14000
  };
// two way data binding -> emite y recibe eventos o propiedades
  // cambiarNombre(event: any): void {
  //   event.preventDefault();
  // }
  add(): void  {
  console.log(this.nuevo);
  }

}
