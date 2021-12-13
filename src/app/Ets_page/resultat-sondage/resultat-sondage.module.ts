import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatSondagePageRoutingModule } from './resultat-sondage-routing.module';

import { ResultatSondagePage } from './resultat-sondage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatSondagePageRoutingModule
  ],
  declarations: [ResultatSondagePage]
})
export class ResultatSondagePageModule {}
