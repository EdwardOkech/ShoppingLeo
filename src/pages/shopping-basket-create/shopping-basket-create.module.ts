import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingBasketCreatePage } from './shopping-basket-create';

@NgModule({
  declarations: [
    ShoppingBasketCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingBasketCreatePage),
  ],
})
export class ShoppingBasketCreatePageModule {}
