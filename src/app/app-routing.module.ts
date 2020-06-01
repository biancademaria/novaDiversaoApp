import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'scooby-ofilme',
    loadChildren: () => import('./filmes/scooby-ofilme/scooby-ofilme.module').then( m => m.ScoobyOFilmePageModule)
  },
  {
    path: 'blood-and-money',
    loadChildren: () => import('./filmes/blood-and-money/blood-and-money.module').then( m => m.BloodAndMoneyPageModule)
  },
  {
    path: 'a-ilha-da-fantasia',
    loadChildren: () => import('./filmes/a-ilha-da-fantasia/a-ilha-da-fantasia.module').then( m => m.AIlhaDaFantasiaPageModule)
  },
  {
    path: 'scooby-ofilme',
    loadChildren: () => import('./filmes/scooby-ofilme/scooby-ofilme.module').then( m => m.ScoobyOfilmePageModule)
  },
  {
    path: 'scooby-ofilme',
    loadChildren: () => import('./filmes/scooby-ofilme/scooby-ofilme.module').then( m => m.ScoobyOFilmePageModule)
  },
  {
    path: 'filme-scooby-doo',
    loadChildren: () => import('./filmes/filme-scooby-doo/filme-scooby-doo.module').then( m => m.FilmeScoobyDooPageModule)
  },
  {
    path: 'a-cacada',
    loadChildren: () => import('./filmes/a-cacada/a-cacada.module').then( m => m.ACacadaPageModule)
  },
  {
    path: 'broil',
    loadChildren: () => import('./filmes/broil/broil.module').then( m => m.BroilPageModule)
  },
  {
    path: 'ditwale',
    loadChildren: () => import('./filmes/ditwale/ditwale.module').then( m => m.DitwalePageModule)
  },
  {
    path: 'os-condenados-de-shawshank',
    loadChildren: () => import('./filmes/os-condenados-de-shawshank/os-condenados-de-shawshank.module').then( m => m.OsCondenadosDeShawshankPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'anne-with-an-e',
    loadChildren: () => import('./series/anne-with-an-e/anne-with-an-e.module').then( m => m.AnneWithAnEPageModule)
  },
  {
    path: 'hollywood',
    loadChildren: () => import('./series/hollywood/hollywood.module').then( m => m.HollywoodPageModule)
  },
  {
    path: 'titans',
    loadChildren: () => import('./series/titans/titans.module').then( m => m.TitansPageModule)
  },
  {
    path: 'camundongos-aventureiros',
    loadChildren: () => import('./desenhos/camundongos-aventureiros/camundongos-aventureiros.module').then( m => m.CamundongosAventureirosPageModule)
  },
  {
    path: 'as-tres-espias-demais',
    loadChildren: () => import('./desenhos/as-tres-espias-demais/as-tres-espias-demais.module').then( m => m.AsTresEspiasDemaisPageModule)
  },
  {
    path: 'kick-buttowski',
    loadChildren: () => import('./desenhos/kick-buttowski/kick-buttowski.module').then( m => m.KickButtowskiPageModule)
  },
  {
    path: 'as-meninas-superpoderosas',
    loadChildren: () => import('./desenhos/as-meninas-superpoderosas/as-meninas-superpoderosas.module').then( m => m.AsMeninasSuperpoderosasPageModule)
  },
  {
    path: 'bob-esponja',
    loadChildren: () => import('./desenhos/bob-esponja/bob-esponja.module').then( m => m.BobEsponjaPageModule)
  },
  {
    path: 'jimmy-neutron',
    loadChildren: () => import('./desenhos/jimmy-neutron/jimmy-neutron.module').then( m => m.JimmyNeutronPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
