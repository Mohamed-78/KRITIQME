import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VoterComponent } from './voter/voter.component';
import { DonnerAvisComponent } from  './donner-avis/donner-avis.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'single-page',
    loadChildren: () => import('./single-page/single-page.module').then( m => m.SinglePagePageModule)
  },
  {
    path: 'participe-vote',
    loadChildren: () => import('./participe-vote/participe-vote.module').then( m => m.ParticipeVotePageModule)
  },
  {
    path: 'reglage',
    loadChildren: () => import('./reglage/reglage.module').then( m => m.ReglagePageModule)
  },
  {
    path: 'avis',
    loadChildren: () => import('./avis/avis.module').then( m => m.AvisPageModule)
  },
  {
    path: 'avis-recent',
    loadChildren: () => import('./avis-recent/avis-recent.module').then( m => m.AvisRecentPageModule)
  },
  {
    path: 'completer-profil',
    loadChildren: () => import('./completer-profil/completer-profil.module').then( m => m.CompleterProfilPageModule)
  },
  {
    path: 'gain',
    loadChildren: () => import('./gain/gain.module').then( m => m.GainPageModule)
  },
  {
    path: 'detail-mission',
    loadChildren: () => import('./detail-mission/detail-mission.module').then( m => m.DetailMissionPageModule)
  },
  {
    path: 'tache',
    loadChildren: () => import('./tache/tache.module').then( m => m.TachePageModule)
  },
  {
    path: 'demande-paiement',
    loadChildren: () => import('./demande-paiement/demande-paiement.module').then( m => m.DemandePaiementPageModule)
  },
  {
    path: 'statut-paiement',
    loadChildren: () => import('./statut-paiement/statut-paiement.module').then( m => m.StatutPaiementPageModule)
  },
  {
    path: 'historique-mission',
    loadChildren: () => import('./historique-mission/historique-mission.module').then( m => m.HistoriqueMissionPageModule)
  },
  {
    path: 'mission-accepte',
    loadChildren: () => import('./mission-accepte/mission-accepte.module').then( m => m.MissionAcceptePageModule)
  },
  {
    path: 'msg-validation',
    loadChildren: () => import('./msg-validation/msg-validation.module').then( m => m.MsgValidationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
