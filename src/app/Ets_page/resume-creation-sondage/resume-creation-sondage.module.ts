import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumeCreationSondagePageRoutingModule } from './resume-creation-sondage-routing.module';

import { ResumeCreationSondagePage } from './resume-creation-sondage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumeCreationSondagePageRoutingModule
  ],
  declarations: [ResumeCreationSondagePage]
})
export class ResumeCreationSondagePageModule {}
