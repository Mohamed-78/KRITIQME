import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creersondage1Page } from './creersondage1.page';

const routes: Routes = [
  {
    path: '',
    component: Creersondage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creersondage1PageRoutingModule {}
