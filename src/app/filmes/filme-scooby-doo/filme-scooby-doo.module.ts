import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeScoobyDooPageRoutingModule } from './filme-scooby-doo-routing.module';

import { FilmeScoobyDooPage } from './filme-scooby-doo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeScoobyDooPageRoutingModule
  ],
  declarations: [FilmeScoobyDooPage]
})
export class FilmeScoobyDooPageModule {}
