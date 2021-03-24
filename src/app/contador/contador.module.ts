import {NgModule} from '@angular/core'
import { ContadorComponent } from './contator/contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [ ContadorComponent],
  imports: [],
})
export class  contadorModule {

}
