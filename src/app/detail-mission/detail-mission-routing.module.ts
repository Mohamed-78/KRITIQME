import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMissionPage } from './detail-mission.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMissionPageRoutingModule {}
