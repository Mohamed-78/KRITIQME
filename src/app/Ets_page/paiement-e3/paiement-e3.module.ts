import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementE3PageRoutingModule } from './paiement-e3-routing.module';

import { PaiementE3Page } from './paiement-e3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementE3PageRoutingModule
  ],
  declarations: [PaiementE3Page]
})
export class PaiementE3PageModule {}
