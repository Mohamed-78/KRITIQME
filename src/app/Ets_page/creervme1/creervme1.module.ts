import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creervme1PageRoutingModule } from './creervme1-routing.module';

import { Creervme1Page } from './creervme1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creervme1PageRoutingModule
  ],
  declarations: [Creervme1Page]
})
export class Creervme1PageModule {}
