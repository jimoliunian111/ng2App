import { Component, Input, OnInit, NgModule } from '@angular/core';
import { IonicPage, IonicModule } from 'ionic-angular';

/**
 * Generated class for the ModuleTemplateComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'n-template',
  templateUrl: 'template.html'
})
export class TemplateComponent {
  @Input() item: any;
  @Input() tempData: Object;
  flexStyle: any;
  constructor() {
  }
  init () {
    if (this.item && this.item.col) {
      this.flexStyle = {
        '-webkit-box-orient': this.item.col === 6 ? 'horizontal' : 'vertical',
        '-webkit-box-direction': 'normal',
        '-webkit-flex-direction': this.item.col === 6 ? 'row' : 'column',
        'flex-direction': this.item.col === 6 ? 'row' : 'column',
        '-webkit-box-flex': this.item.col ? `${this.item.col === 6 ? 6 : 6 - this.item.col}` : 1,
        '-webkit-flex': this.item.col ? `${this.item.col}` : 1,
        'flex': this.item.col ? `${this.item.col}` : 1,
        'display': 'flex'
      }
    }
  }
  ngOnInit() {
//  console.log('9999999999', this.item)
    this.init()
  }
  ionViewDidEnter () {
  }
  ionViewDidLoad () {
  }
  ngDoCheck () {
  }
  ngAfterContentInit () {
//  console.log(123)
//  console.log(this.item)
  }
  ngOnchanges () {

  }
}
