import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsCondenadosDeShawshankPage } from './os-condenados-de-shawshank.page';

const routes: Routes = [
  {
    path: '',
    component: OsCondenadosDeShawshankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsCondenadosDeShawshankPageRoutingModule {}
