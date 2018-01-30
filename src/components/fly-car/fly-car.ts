import { Component } from '@angular/core';

/**
 * Generated class for the FlyCarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fly-car',
  templateUrl: 'fly-car.html'
})
export class FlyCarComponent {

  text: string;

  constructor() {
    console.log('Hello FlyCarComponent Component');
    this.text = 'Hello World';
  }

}
