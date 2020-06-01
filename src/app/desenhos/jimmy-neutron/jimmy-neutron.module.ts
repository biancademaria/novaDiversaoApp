import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JimmyNeutronPageRoutingModule } from './jimmy-neutron-routing.module';

import { JimmyNeutronPage } from './jimmy-neutron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JimmyNeutronPageRoutingModule
  ],
  declarations: [JimmyNeutronPage]
})
export class JimmyNeutronPageModule {}
