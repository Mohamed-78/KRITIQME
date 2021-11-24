import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementE2Page } from './paiement-e2.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementE2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementE2PageRoutingModule {}
