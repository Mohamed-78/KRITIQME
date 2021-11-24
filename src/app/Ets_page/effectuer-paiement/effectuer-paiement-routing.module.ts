import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectuerPaiementPage } from './effectuer-paiement.page';

const routes: Routes = [
  {
    path: '',
    component: EffectuerPaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffectuerPaiementPageRoutingModule {}
