import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRapportPage } from './liste-rapport.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRapportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRapportPageRoutingModule {}
