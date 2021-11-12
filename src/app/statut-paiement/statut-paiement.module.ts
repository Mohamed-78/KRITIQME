import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatutPaiementPageRoutingModule } from './statut-paiement-routing.module';

import { StatutPaiementPage } from './statut-paiement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatutPaiementPageRoutingModule
  ],
  declarations: [StatutPaiementPage]
})
export class StatutPaiementPageModule {}
