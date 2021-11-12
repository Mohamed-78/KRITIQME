import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandePaiementPageRoutingModule } from './demande-paiement-routing.module';

import { DemandePaiementPage } from './demande-paiement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandePaiementPageRoutingModule
  ],
  declarations: [DemandePaiementPage]
})
export class DemandePaiementPageModule {}
