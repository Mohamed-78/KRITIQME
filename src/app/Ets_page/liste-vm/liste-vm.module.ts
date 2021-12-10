import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeVmPageRoutingModule } from './liste-vm-routing.module';

import { ListeVmPage } from './liste-vm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeVmPageRoutingModule
  ],
  declarations: [ListeVmPage]
})
export class ListeVmPageModule {}
