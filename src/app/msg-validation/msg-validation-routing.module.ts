import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsgValidationPage } from './msg-validation.page';

const routes: Routes = [
  {
    path: '',
    component: MsgValidationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsgValidationPageRoutingModule {}
