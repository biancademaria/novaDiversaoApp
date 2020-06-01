import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DitwalePage } from './ditwale.page';

const routes: Routes = [
  {
    path: '',
    component: DitwalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DitwalePageRoutingModule {}
