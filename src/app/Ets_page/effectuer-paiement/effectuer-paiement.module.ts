import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EffectuerPaiementPageRoutingModule } from './effectuer-paiement-routing.module';

import { EffectuerPaiementPage } from './effectuer-paiement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffectuerPaiementPageRoutingModule
  ],
  declarations: [EffectuerPaiementPage]
})
export class EffectuerPaiementPageModule {}
