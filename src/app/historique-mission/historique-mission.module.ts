import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueMissionPageRoutingModule } from './historique-mission-routing.module';

import { HistoriqueMissionPage } from './historique-mission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueMissionPageRoutingModule
  ],
  declarations: [HistoriqueMissionPage]
})
export class HistoriqueMissionPageModule {}
