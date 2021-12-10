import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creersondage2Page } from './creersondage2.page';

const routes: Routes = [
  {
    path: '',
    component: Creersondage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creersondage2PageRoutingModule {}
