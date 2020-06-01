import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HollywoodPage } from './hollywood.page';

const routes: Routes = [
  {
    path: '',
    component: HollywoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HollywoodPageRoutingModule {}
