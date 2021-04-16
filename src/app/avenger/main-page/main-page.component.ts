import { Component } from '@angular/core';
import { Personaje } from '../interfaces/avenger.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Iroman',
      poder: 15000
    },
    {
      nombre: 'Capitan America',
      poder: 7500
    },
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };
// two way data binding -> emite y recibe eventos o propiedades
  // cambiarNombre(event: any): void {
  //   event.preventDefault();
  // }
  add(): void  {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
  };

}
}
