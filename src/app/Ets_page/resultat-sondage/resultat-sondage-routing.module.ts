import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatSondagePage } from './resultat-sondage.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatSondagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatSondagePageRoutingModule {}
