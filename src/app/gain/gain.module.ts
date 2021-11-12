import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GainPageRoutingModule } from './gain-routing.module';

import { GainPage } from './gain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GainPageRoutingModule
  ],
  declarations: [GainPage]
})
export class GainPageModule {}
