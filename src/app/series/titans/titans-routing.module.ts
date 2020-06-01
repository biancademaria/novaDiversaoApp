import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitansPage } from './titans.page';

const routes: Routes = [
  {
    path: '',
    component: TitansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitansPageRoutingModule {}
