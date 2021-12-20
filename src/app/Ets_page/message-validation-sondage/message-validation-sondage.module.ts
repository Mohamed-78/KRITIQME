import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageValidationSondagePageRoutingModule } from './message-validation-sondage-routing.module';

import { MessageValidationSondagePage } from './message-validation-sondage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageValidationSondagePageRoutingModule
  ],
  declarations: [MessageValidationSondagePage]
})
export class MessageValidationSondagePageModule {}
