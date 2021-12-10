import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creersondage1PageRoutingModule } from './creersondage1-routing.module';

import { Creersondage1Page } from './creersondage1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creersondage1PageRoutingModule
  ],
  declarations: [Creersondage1Page]
})
export class Creersondage1PageModule {}
