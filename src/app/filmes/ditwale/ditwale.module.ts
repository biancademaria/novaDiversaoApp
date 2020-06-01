import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DitwalePageRoutingModule } from './ditwale-routing.module';

import { DitwalePage } from './ditwale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DitwalePageRoutingModule
  ],
  declarations: [DitwalePage]
})
export class DitwalePageModule {}
