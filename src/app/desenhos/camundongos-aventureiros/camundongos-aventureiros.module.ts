import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamundongosAventureirosPageRoutingModule } from './camundongos-aventureiros-routing.module';

import { CamundongosAventureirosPage } from './camundongos-aventureiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamundongosAventureirosPageRoutingModule
  ],
  declarations: [CamundongosAventureirosPage]
})
export class CamundongosAventureirosPageModule {}
