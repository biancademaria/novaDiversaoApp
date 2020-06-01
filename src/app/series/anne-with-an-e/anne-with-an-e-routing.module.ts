import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnneWithAnEPage } from './anne-with-an-e.page';

const routes: Routes = [
  {
    path: '',
    component: AnneWithAnEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnneWithAnEPageRoutingModule {}
