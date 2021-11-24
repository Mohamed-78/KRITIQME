import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creervme3Page } from './creervme3.page';

const routes: Routes = [
  {
    path: '',
    component: Creervme3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creervme3PageRoutingModule {}
