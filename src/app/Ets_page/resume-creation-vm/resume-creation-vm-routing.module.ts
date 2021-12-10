import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeCreationVMPage } from './resume-creation-vm.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeCreationVMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeCreationVMPageRoutingModule {}
