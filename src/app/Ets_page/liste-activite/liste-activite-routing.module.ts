import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeActivitePage } from './liste-activite.page';

const routes: Routes = [
  {
    path: '',
    component: ListeActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeActivitePageRoutingModule {}
