import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueActivitePage } from './historique-activite.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueActivitePageRoutingModule {}
