import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisRecentPageRoutingModule } from './avis-recent-routing.module';

import { AvisRecentPage } from './avis-recent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisRecentPageRoutingModule
  ],
  declarations: [AvisRecentPage]
})
export class AvisRecentPageModule {}
