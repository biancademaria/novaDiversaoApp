import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsTresEspiasDemaisPageRoutingModule } from './as-tres-espias-demais-routing.module';

import { AsTresEspiasDemaisPage } from './as-tres-espias-demais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsTresEspiasDemaisPageRoutingModule
  ],
  declarations: [AsTresEspiasDemaisPage]
})
export class AsTresEspiasDemaisPageModule {}
