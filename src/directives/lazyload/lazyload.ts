import { Directive } from '@angular/core';

/**
 * Generated class for the LazyloadDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[lazyload]' // Attribute selector
})
export class LazyloadDirective {

  constructor() {
    console.log('Hello LazyloadDirective Directive');
  }

}
