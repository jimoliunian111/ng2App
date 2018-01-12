import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'jn-topnav',
  templateUrl: 'jn-topnav.html'
})
export class JnTopnavComponent {
  @Input() topObj: any;
  @Input() templateData: any;
  text: string;
  tabActive: any = 0;
  tabId: Number;
  topNavConf: any;
  topNavData: any;
  moduleFlag: Boolean = false;
  dataArr: any = [];
  viewData: any = [];
  tabItem: Object = {};
  jnTopNav: any = '0'
  constructor(public ApiProvider: ApiProvider) {
  }
  ionViewDidLoad () {

  }
  ngOnInit () {
    console.log('sssss====')
    if (this.topObj && this.topObj.conf && this.topObj.conf.items && this.topObj.conf.items.length > 0) {
      this.topObj.conf.items.forEach((childItem) => {
        childItem.click = true
        childItem.conf = {}
        childItem.data = {}
        this.dataArr.push(childItem)
      });
      this.activeClick(this.dataArr[this.tabActive], this.tabActive)
    }
  }
  activeClick (item, idx) {
    this.tabItem = item
    this.tabActive = idx
    if (!item.click) {
      return
    }
    this.getTemp(item)
  }
  getTemp (item) {
      let param: Object = {
        template_id: item.id
      }
      this.ApiProvider.GetModuleTemp(param).subscribe((resp) => {
        let param: Object = {
          template_id: item.id
        }
        this.ApiProvider.GetModuleData(param).subscribe((res) => {
          this.topNavConf = JSON.parse(resp.data[0].config)
          this.topNavData = res.data
          item.conf = JSON.parse(resp.data[0].config)
          item.data = res.data
          item.click = false
          this.tabItem = item
          this.viewData = []
          this.viewData = this.dataArr
          // this.moduleFlag = true
        }, (err) => {});
      }, (err) => {});
  }
}
