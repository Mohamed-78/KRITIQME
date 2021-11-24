import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueActivitePageRoutingModule } from './historique-activite-routing.module';

import { HistoriqueActivitePage } from './historique-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueActivitePageRoutingModule
  ],
  declarations: [HistoriqueActivitePage]
})
export class HistoriqueActivitePageModule {}
