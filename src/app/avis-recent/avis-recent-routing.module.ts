import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisRecentPage } from './avis-recent.page';

const routes: Routes = [
  {
    path: '',
    component: AvisRecentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisRecentPageRoutingModule {}
