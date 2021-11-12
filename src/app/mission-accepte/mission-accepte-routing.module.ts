import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionAcceptePage } from './mission-accepte.page';

const routes: Routes = [
  {
    path: '',
    component: MissionAcceptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionAcceptePageRoutingModule {}
