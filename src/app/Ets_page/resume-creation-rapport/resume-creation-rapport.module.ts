import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumeCreationRapportPageRoutingModule } from './resume-creation-rapport-routing.module';

import { ResumeCreationRapportPage } from './resume-creation-rapport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumeCreationRapportPageRoutingModule
  ],
  declarations: [ResumeCreationRapportPage]
})
export class ResumeCreationRapportPageModule {}
