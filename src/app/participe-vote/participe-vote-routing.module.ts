import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipeVotePage } from './participe-vote.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipeVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipeVotePageRoutingModule {}
