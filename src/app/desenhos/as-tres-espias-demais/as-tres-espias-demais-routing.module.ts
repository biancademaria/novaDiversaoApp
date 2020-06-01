import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsTresEspiasDemaisPage } from './as-tres-espias-demais.page';

const routes: Routes = [
  {
    path: '',
    component: AsTresEspiasDemaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsTresEspiasDemaisPageRoutingModule {}
