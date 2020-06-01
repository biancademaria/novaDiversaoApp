import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsMeninasSuperpoderosasPage } from './as-meninas-superpoderosas.page';

const routes: Routes = [
  {
    path: '',
    component: AsMeninasSuperpoderosasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsMeninasSuperpoderosasPageRoutingModule {}
