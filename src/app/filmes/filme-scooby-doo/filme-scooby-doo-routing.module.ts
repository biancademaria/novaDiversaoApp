import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeScoobyDooPage } from './filme-scooby-doo.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeScoobyDooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeScoobyDooPageRoutingModule {}
