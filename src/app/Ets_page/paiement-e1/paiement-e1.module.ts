import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementE1PageRoutingModule } from './paiement-e1-routing.module';

import { PaiementE1Page } from './paiement-e1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementE1PageRoutingModule
  ],
  declarations: [PaiementE1Page]
})
export class PaiementE1PageModule {}
