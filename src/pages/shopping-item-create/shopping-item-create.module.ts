import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingItemCreatePage } from './shopping-item-create';

@NgModule({
  declarations: [
    ShoppingItemCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingItemCreatePage),
  ],
})
export class ShoppingItemCreatePageModule {}
