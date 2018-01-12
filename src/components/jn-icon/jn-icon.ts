import { Component, Input } from '@angular/core';
import { PublicFuncProvider } from '../../providers/public-func/public-func';

@Component({
  selector: 'jn-icon',
  templateUrl: 'jn-icon.html'
})
export class JnIconComponent {
  @Input() item: Object = {}

  constructor(public func: PublicFuncProvider) {
  }
  ItemClick (item) {
    this.func.ItemClick(item)
  }
}
