import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creersondage2PageRoutingModule } from './creersondage2-routing.module';

import { Creersondage2Page } from './creersondage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creersondage2PageRoutingModule
  ],
  declarations: [Creersondage2Page]
})
export class Creersondage2PageModule {}
