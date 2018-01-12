import { Component, Input } from '@angular/core';
//import { JnProductComponent } from '../jn-product/jn-product'

/**
 * Generated class for the JnGoodslistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'jn-goodslist',
  templateUrl: 'jn-goodslist.html'
})
export class JnGoodslistComponent {
  @Input() goodsObj: any;
  @Input() templateData: any;
  @Input() goodsList: any;
  goodsArr: any;

  constructor() {
  }
  ngOnInit() {
    console.log('454', this.templateData, this.goodsObj)
    if(this.templateData && this.templateData.goods_list && this.templateData.goods_list[this.goodsObj && this.goodsObj.module_id]) {
      let arr = []
      this.goodsObj && this.goodsObj.conf && this.goodsObj.conf.items && this.goodsObj.conf.items.forEach((good) => {
        this.templateData.goods_list[this.goodsObj && this.goodsObj.module_id].forEach((product) => {
          if(+good.id === +product.goods_id) {
            arr.push(product)
          }
        })
      })
      this.goodsArr = arr
      console.log('8888', this.goodsArr)
    }
  }
}