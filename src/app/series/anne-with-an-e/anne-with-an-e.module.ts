import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnneWithAnEPageRoutingModule } from './anne-with-an-e-routing.module';

import { AnneWithAnEPage } from './anne-with-an-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnneWithAnEPageRoutingModule
  ],
  declarations: [AnneWithAnEPage]
})
export class AnneWithAnEPageModule {}
