import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRapportPageRoutingModule } from './detail-rapport-routing.module';

import { DetailRapportPage } from './detail-rapport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRapportPageRoutingModule
  ],
  declarations: [DetailRapportPage]
})
export class DetailRapportPageModule {}
