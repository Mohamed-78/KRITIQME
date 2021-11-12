import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMissionPageRoutingModule } from './detail-mission-routing.module';

import { DetailMissionPage } from './detail-mission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMissionPageRoutingModule
  ],
  declarations: [DetailMissionPage]
})
export class DetailMissionPageModule {}
