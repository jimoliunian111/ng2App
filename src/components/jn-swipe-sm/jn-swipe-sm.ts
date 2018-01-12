import { Component, Input, OnInit } from '@angular/core';
import { PublicFuncProvider } from '../../providers/public-func/public-func';

/**
 * Generated class for the JnSwipeSmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'jn-swipe-sm',
  templateUrl: 'jn-swipe-sm.html'
})
export class JnSwipeSmComponent implements OnInit {
  @Input() item: any;
  @Input() templateData: any;
  text: string;
  swipeArr: any;

  constructor(public func: PublicFuncProvider) {
    console.log('Hello JnSwipeSmComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit () {
    console.log('sdsda', this.item)
    console.log('8888888', this.templateData)
    this.getData()
  }
  ItemClick (item) {
    console.log('565656')
    this.func.swipeSmClick(item)
  }
  getData () {
    if (this.templateData && this.templateData.swiper_list && this.templateData.swiper_list[this.item.module_id]) {
      let arr = []
      this.item && this.item.conf && this.item.conf.items && this.item.conf.items.forEach((good) => {
        this.templateData && this.templateData.swiper_list && this.templateData.swiper_list[this.item.module_id].forEach((swipe) => {
          if (+good.id === +swipe.goods_id) {
            swipe.diy = good
            arr.push(swipe)
          }
        })
      })
      this.swipeArr = arr
    }
  }
}
