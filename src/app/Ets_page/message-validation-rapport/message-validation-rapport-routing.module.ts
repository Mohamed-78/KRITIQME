import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageValidationRapportPage } from './message-validation-rapport.page';

const routes: Routes = [
  {
    path: '',
    component: MessageValidationRapportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageValidationRapportPageRoutingModule {}
