import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creersondage3PageRoutingModule } from './creersondage3-routing.module';

import { Creersondage3Page } from './creersondage3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creersondage3PageRoutingModule
  ],
  declarations: [Creersondage3Page]
})
export class Creersondage3PageModule {}
