import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatMissionVmPage } from './resultat-mission-vm.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatMissionVmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatMissionVmPageRoutingModule {}
