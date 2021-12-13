import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatMissionVmPageRoutingModule } from './resultat-mission-vm-routing.module';

import { ResultatMissionVmPage } from './resultat-mission-vm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatMissionVmPageRoutingModule
  ],
  declarations: [ResultatMissionVmPage]
})
export class ResultatMissionVmPageModule {}
