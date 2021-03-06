import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/avenger.interface';
import { AvengersServices } from './../services/avengers.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {



  @Input()
  nuevo: Personaje = {
    nombre: 'Capitana',
    poder: 12
  };
  // @Output = nos permite emitir un valor del componente hijo al componente padre
  // tslint:disable-next-line: no-output-on-prefix
  // @Output() onNewPerson: EventEmitter<Personaje> = new EventEmitter();

  constructor(private avengersServices: AvengersServices) {}

  add(): void  {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    // this.onNewPerson.emit(this.nuevo);
    this.avengersServices.addNewPerson(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
  };

}

}
