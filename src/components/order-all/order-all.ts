import { Component } from '@angular/core';

/**
 * Generated class for the OrderAllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-all',
  templateUrl: 'order-all.html'
})
export class OrderAllComponent {

  text: string;

  constructor() {
    console.log('Hello OrderAllComponent Component');
    this.text = 'Hello World';
  }

}
