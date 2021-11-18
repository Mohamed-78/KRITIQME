import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsgValidationPageRoutingModule } from './msg-validation-routing.module';

import { MsgValidationPage } from './msg-validation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsgValidationPageRoutingModule
  ],
  declarations: [MsgValidationPage]
})
export class MsgValidationPageModule {}
