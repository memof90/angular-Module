import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/avenger.interface';
import { AvengersServices } from '../services/avengers.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{
  // @Input()
  // personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.avengersServices.personajes;
  }

  constructor(private avengersServices: AvengersServices) {

  }
}
