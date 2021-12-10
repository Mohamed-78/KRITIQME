import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSondagePage } from './liste-sondage.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSondagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSondagePageRoutingModule {}
