import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeVmPage } from './liste-vm.page';

const routes: Routes = [
  {
    path: '',
    component: ListeVmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeVmPageRoutingModule {}
