import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCategoryListPage } from './shopping-category-list';

@NgModule({
  declarations: [
    ShoppingCategoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCategoryListPage),
  ],
})
export class ShoppingCategoryListPageModule {}
