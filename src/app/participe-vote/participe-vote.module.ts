import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipeVotePageRoutingModule } from './participe-vote-routing.module';

import { ParticipeVotePage } from './participe-vote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipeVotePageRoutingModule
  ],
  declarations: [ParticipeVotePage]
})
export class ParticipeVotePageModule {}
