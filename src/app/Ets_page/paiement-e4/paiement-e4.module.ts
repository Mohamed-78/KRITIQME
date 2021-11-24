import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementE4PageRoutingModule } from './paiement-e4-routing.module';

import { PaiementE4Page } from './paiement-e4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementE4PageRoutingModule
  ],
  declarations: [PaiementE4Page]
})
export class PaiementE4PageModule {}
