import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRapportPageRoutingModule } from './liste-rapport-routing.module';

import { ListeRapportPage } from './liste-rapport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRapportPageRoutingModule
  ],
  declarations: [ListeRapportPage]
})
export class ListeRapportPageModule {}
