import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsCondenadosDeShawshankPageRoutingModule } from './os-condenados-de-shawshank-routing.module';

import { OsCondenadosDeShawshankPage } from './os-condenados-de-shawshank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsCondenadosDeShawshankPageRoutingModule
  ],
  declarations: [OsCondenadosDeShawshankPage]
})
export class OsCondenadosDeShawshankPageModule {}
