import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRapportPage } from './detail-rapport.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRapportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRapportPageRoutingModule {}
