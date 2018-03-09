import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCategoryCreatePage } from './shopping-category-create';

@NgModule({
  declarations: [
    ShoppingCategoryCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCategoryCreatePage),
  ],
})
export class ShoppingCategoryCreatePageModule {}
