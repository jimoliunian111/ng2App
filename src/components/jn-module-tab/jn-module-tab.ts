import { Component, Input, OnInit } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the JnModuleTabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'jn-module-tab',
  templateUrl: 'jn-module-tab.html'
})
export class JnModuleTabComponent implements OnInit {

  @Input() item: any;
  @Input() templateData: any;

  tabActive: Number = 0;
  tempConf: any;
  tempData: any;
  constructor(public ApiProvider: ApiProvider) {}
  activeClick(item, idx) {
    this.tabActive = idx
    this.getTemp(item.id && item.id)
  }
  ngOnInit () {
    if (this.item && this.item.conf && this.item.conf.items && this.item.conf.items.length > 0) {
      this.activeClick(this.item.conf.items[0], 0)
    }
  }
  getTemp(id) {
    let param: Object = {
      template_id: id
    }
    this.ApiProvider.GetModuleTemp(param).subscribe((resp) => {
      console.log('tab配置模板数据', resp)
      this.tempConf = JSON.parse(resp.data[0].config)
      this.getData(id)
    }, (err) => {});
  }
  getData(id) {
    let param: Object = {
      template_id: id
    }
    this.ApiProvider.GetModuleData(param).subscribe((resp) => {
      console.log('tab配置数据', resp)
      this.tempData = resp.data
    }, (err) => {});
  }
}