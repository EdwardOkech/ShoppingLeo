import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingBasketsPage } from './shopping-baskets';

@NgModule({
  declarations: [
    ShoppingBasketsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingBasketsPage),
  ],
})
export class ShoppingBasketsPageModule {}
