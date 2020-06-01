import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsMeninasSuperpoderosasPageRoutingModule } from './as-meninas-superpoderosas-routing.module';

import { AsMeninasSuperpoderosasPage } from './as-meninas-superpoderosas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsMeninasSuperpoderosasPageRoutingModule
  ],
  declarations: [AsMeninasSuperpoderosasPage]
})
export class AsMeninasSuperpoderosasPageModule {}
