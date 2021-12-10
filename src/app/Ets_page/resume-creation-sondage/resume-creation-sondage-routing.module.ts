import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeCreationSondagePage } from './resume-creation-sondage.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeCreationSondagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeCreationSondagePageRoutingModule {}
