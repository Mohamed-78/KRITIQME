import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueMissionPage } from './historique-mission.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueMissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueMissionPageRoutingModule {}
