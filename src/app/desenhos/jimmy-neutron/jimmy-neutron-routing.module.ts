import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JimmyNeutronPage } from './jimmy-neutron.page';

const routes: Routes = [
  {
    path: '',
    component: JimmyNeutronPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JimmyNeutronPageRoutingModule {}
