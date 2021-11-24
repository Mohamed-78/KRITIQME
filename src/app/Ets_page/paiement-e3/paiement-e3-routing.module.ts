import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementE3Page } from './paiement-e3.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementE3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementE3PageRoutingModule {}
