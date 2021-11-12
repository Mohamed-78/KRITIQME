import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandePaiementPage } from './demande-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: DemandePaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandePaiementPageRoutingModule {}
