import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GainPage } from './gain.page';

const routes: Routes = [
  {
    path: '',
    component: GainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GainPageRoutingModule {}
