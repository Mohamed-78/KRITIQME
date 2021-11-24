import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creervme3PageRoutingModule } from './creervme3-routing.module';

import { Creervme3Page } from './creervme3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creervme3PageRoutingModule
  ],
  declarations: [Creervme3Page]
})
export class Creervme3PageModule {}
