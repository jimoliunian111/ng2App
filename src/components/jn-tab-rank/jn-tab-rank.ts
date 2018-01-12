import { Component, NgModule } from '@angular/core';
import { IonicPage, IonicModule } from 'ionic-angular';

/**
 * Generated class for the JnTabRankComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'jn-tab-rank',
  templateUrl: 'jn-tab-rank.html'
})
export class JnTabRankComponent {

  text: string;

  constructor() {
    console.log('Hello JnTabRankComponent Component');
    this.text = 'Hello World';
  }

}
