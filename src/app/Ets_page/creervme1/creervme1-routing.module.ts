import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creervme1Page } from './creervme1.page';

const routes: Routes = [
  {
    path: '',
    component: Creervme1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creervme1PageRoutingModule {}
