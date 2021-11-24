import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creervme2Page } from './creervme2.page';

const routes: Routes = [
  {
    path: '',
    component: Creervme2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creervme2PageRoutingModule {}
