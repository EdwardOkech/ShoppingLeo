import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingBasketDetailPage } from './shopping-basket-detail';

@NgModule({
  declarations: [
    ShoppingBasketDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingBasketDetailPage),
  ],
})
export class ShoppingBasketDetailPageModule {}
