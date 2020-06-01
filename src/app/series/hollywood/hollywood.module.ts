import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HollywoodPageRoutingModule } from './hollywood-routing.module';

import { HollywoodPage } from './hollywood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HollywoodPageRoutingModule
  ],
  declarations: [HollywoodPage]
})
export class HollywoodPageModule {}
