import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCategoryDetailPage } from './shopping-category-detail';

@NgModule({
  declarations: [
    ShoppingCategoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCategoryDetailPage),
  ],
})
export class ShoppingCategoryDetailPageModule {}
