import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementE2PageRoutingModule } from './paiement-e2-routing.module';

import { PaiementE2Page } from './paiement-e2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementE2PageRoutingModule
  ],
  declarations: [PaiementE2Page]
})
export class PaiementE2PageModule {}
