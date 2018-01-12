import { NgModule } from '@angular/core';
import { CategoryPage} from './category';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CategoryPage],
  imports: [IonicPageModule.forChild(CategoryPage)],
})
export class CategoryPageModule { }
