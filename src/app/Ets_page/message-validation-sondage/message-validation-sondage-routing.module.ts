import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageValidationSondagePage } from './message-validation-sondage.page';

const routes: Routes = [
  {
    path: '',
    component: MessageValidationSondagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageValidationSondagePageRoutingModule {}
