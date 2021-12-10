import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreeRapportDetaillePageRoutingModule } from './cree-rapport-detaille-routing.module';

import { CreeRapportDetaillePage } from './cree-rapport-detaille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreeRapportDetaillePageRoutingModule
  ],
  declarations: [CreeRapportDetaillePage]
})
export class CreeRapportDetaillePageModule {}
