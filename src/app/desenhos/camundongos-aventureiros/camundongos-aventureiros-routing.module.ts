import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamundongosAventureirosPage } from './camundongos-aventureiros.page';

const routes: Routes = [
  {
    path: '',
    component: CamundongosAventureirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamundongosAventureirosPageRoutingModule {}
