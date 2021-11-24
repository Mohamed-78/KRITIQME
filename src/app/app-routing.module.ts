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
  },
  {
    path: 'liste-activite',
    loadChildren: () => import('./Ets_page/liste-activite/liste-activite.module').then( m => m.ListeActivitePageModule)
  },
  {
    path: 'historique-activite',
    loadChildren: () => import('./Ets_page/historique-activite/historique-activite.module').then( m => m.HistoriqueActivitePageModule)
  },
  {
    path: 'creer-activite',
    loadChildren: () => import('./Ets_page/creer-activite/creer-activite.module').then( m => m.CreerActivitePageModule)
  },
  {
    path: 'effectuer-paiement',
    loadChildren: () => import('./Ets_page/effectuer-paiement/effectuer-paiement.module').then( m => m.EffectuerPaiementPageModule)
  },
  {
    path: 'paiement-e1',
    loadChildren: () => import('./Ets_page/paiement-e1/paiement-e1.module').then( m => m.PaiementE1PageModule)
  },
  {
    path: 'paiement-e2',
    loadChildren: () => import('./Ets_page/paiement-e2/paiement-e2.module').then( m => m.PaiementE2PageModule)
  },
  {
    path: 'paiement-e3',
    loadChildren: () => import('./Ets_page/paiement-e3/paiement-e3.module').then( m => m.PaiementE3PageModule)
  },
  {
    path: 'paiement-e4',
    loadChildren: () => import('./Ets_page/paiement-e4/paiement-e4.module').then( m => m.PaiementE4PageModule)
  },
  {
    path: 'historique-paiement',
    loadChildren: () => import('./Ets_page/historique-paiement/historique-paiement.module').then( m => m.HistoriquePaiementPageModule)
  },
  {
    path: 'detail-activite',
    loadChildren: () => import('./Ets_page/detail-activite/detail-activite.module').then( m => m.DetailActivitePageModule)
  },
  {
    path: 'creervme1',
    loadChildren: () => import('./Ets_page/creervme1/creervme1.module').then( m => m.Creervme1PageModule)
  },
  {
    path: 'creervme2',
    loadChildren: () => import('./Ets_page/creervme2/creervme2.module').then( m => m.Creervme2PageModule)
  },
  {
    path: 'creervme3',
    loadChildren: () => import('./Ets_page/creervme3/creervme3.module').then( m => m.Creervme3PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
