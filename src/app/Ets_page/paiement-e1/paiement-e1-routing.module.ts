import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementE1Page } from './paiement-e1.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementE1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementE1PageRoutingModule {}
