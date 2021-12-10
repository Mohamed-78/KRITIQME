import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creersondage3Page } from './creersondage3.page';

const routes: Routes = [
  {
    path: '',
    component: Creersondage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creersondage3PageRoutingModule {}
