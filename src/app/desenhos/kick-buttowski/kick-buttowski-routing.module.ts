import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KickButtowskiPage } from './kick-buttowski.page';

const routes: Routes = [
  {
    path: '',
    component: KickButtowskiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KickButtowskiPageRoutingModule {}
