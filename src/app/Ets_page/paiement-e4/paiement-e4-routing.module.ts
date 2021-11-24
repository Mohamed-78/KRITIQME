import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementE4Page } from './paiement-e4.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementE4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementE4PageRoutingModule {}
