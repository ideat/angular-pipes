import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'freddy';
  nomberUpper: string = 'FREDDY';

  fecha: Date = new Date(); //fecha actual
 
}
