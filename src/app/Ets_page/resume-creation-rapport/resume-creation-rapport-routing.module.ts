import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeCreationRapportPage } from './resume-creation-rapport.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeCreationRapportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeCreationRapportPageRoutingModule {}
