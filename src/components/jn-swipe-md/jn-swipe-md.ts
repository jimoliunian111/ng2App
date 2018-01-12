import { Component, Input } from '@angular/core';
import { PublicFuncProvider } from '../../providers/public-func/public-func';

@Component({
  selector: 'jn-swipe-md',
  templateUrl: 'jn-swipe-md.html'
})
export class JnSwipeMdComponent {
  @Input() item: any;
  text: string;

  constructor(public func: PublicFuncProvider) {
    console.log('Hello JnSwipeMdComponent Component');
    this.text = 'Hello World';
  }
  ItemClick (item) {
    this.func.swipeMdClick(item, this.item.conf.type)
  }
}
