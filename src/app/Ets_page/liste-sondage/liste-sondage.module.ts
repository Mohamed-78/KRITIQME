import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSondagePageRoutingModule } from './liste-sondage-routing.module';

import { ListeSondagePage } from './liste-sondage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSondagePageRoutingModule
  ],
  declarations: [ListeSondagePage]
})
export class ListeSondagePageModule {}
