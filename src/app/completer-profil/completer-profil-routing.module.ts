import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleterProfilPage } from './completer-profil.page';

const routes: Routes = [
  {
    path: '',
    component: CompleterProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleterProfilPageRoutingModule {}
