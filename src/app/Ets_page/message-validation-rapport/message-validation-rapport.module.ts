import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageValidationRapportPageRoutingModule } from './message-validation-rapport-routing.module';

import { MessageValidationRapportPage } from './message-validation-rapport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageValidationRapportPageRoutingModule
  ],
  declarations: [MessageValidationRapportPage]
})
export class MessageValidationRapportPageModule {}
