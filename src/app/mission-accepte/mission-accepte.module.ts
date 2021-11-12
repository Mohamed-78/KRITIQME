import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionAcceptePageRoutingModule } from './mission-accepte-routing.module';

import { MissionAcceptePage } from './mission-accepte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionAcceptePageRoutingModule
  ],
  declarations: [MissionAcceptePage]
})
export class MissionAcceptePageModule {}
