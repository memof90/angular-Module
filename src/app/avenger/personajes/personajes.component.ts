import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/avenger.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{
  @Input()
  personajes: Personaje[] = [];
}
