import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KickButtowskiPageRoutingModule } from './kick-buttowski-routing.module';

import { KickButtowskiPage } from './kick-buttowski.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KickButtowskiPageRoutingModule
  ],
  declarations: [KickButtowskiPage]
})
export class KickButtowskiPageModule {}
