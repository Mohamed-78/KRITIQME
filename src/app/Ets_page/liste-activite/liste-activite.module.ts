import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeActivitePageRoutingModule } from './liste-activite-routing.module';

import { ListeActivitePage } from './liste-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeActivitePageRoutingModule
  ],
  declarations: [ListeActivitePage]
})
export class ListeActivitePageModule {}
