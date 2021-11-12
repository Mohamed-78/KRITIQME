import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleterProfilPageRoutingModule } from './completer-profil-routing.module';

import { CompleterProfilPage } from './completer-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleterProfilPageRoutingModule
  ],
  declarations: [CompleterProfilPage]
})
export class CompleterProfilPageModule {}
