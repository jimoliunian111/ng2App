import { Component, Input } from '@angular/core';

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
  @Input() startStyle: any;
  text: string;

  constructor() {
    console.log('Hello FlyCarComponent Component');
    this.text = 'Hello World';
  }
  emitClick () {
    console.log('自定义事件激活')
  }
}
