import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatutPaiementPage } from './statut-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: StatutPaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatutPaiementPageRoutingModule {}
