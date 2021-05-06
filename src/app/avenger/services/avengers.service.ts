import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/avenger.interface';

@Injectable()
export class AvengersServices {

     // tslint:disable-next-line: variable-name
     private _personajes: Personaje[] = [
    {
      nombre: 'Iroman',
      poder: 15000
    },
    {
      nombre: 'Capitan America',
      poder: 7500
    },
  ];



    get personajes(): Personaje[] {
        return [...this._personajes];
    }

   constructor() {
    console.log('Services Inicialiazed');
   }

   addNewPerson( personaje: Personaje): void {
    this._personajes.push(personaje);
   }


}
