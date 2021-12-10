import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreeRapportDetaillePage } from './cree-rapport-detaille.page';

const routes: Routes = [
  {
    path: '',
    component: CreeRapportDetaillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreeRapportDetaillePageRoutingModule {}
