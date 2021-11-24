import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creervme2PageRoutingModule } from './creervme2-routing.module';

import { Creervme2Page } from './creervme2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creervme2PageRoutingModule
  ],
  declarations: [Creervme2Page]
})
export class Creervme2PageModule {}
