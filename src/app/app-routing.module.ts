import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'loginhome',
    loadChildren: () => import('./pages/loginhome/loginhome.module').then( m => m.LoginhomePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'cotteges',
    loadChildren: () => import('./pages/cotteges/cotteges.module').then( m => m.CottegesPageModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./pages/foods/foods.module').then( m => m.FoodsPageModule)
  },
  {
    path: 'my1',
    loadChildren: () => import('./pages/booking/my1/my1.module').then( m => m.MY1PageModule)
  },
  {
    path: 'bo1',
    loadChildren: () => import('./pages/booking/bo1/bo1.module').then( m => m.BO1PageModule)
  },
  {
    path: 'mo12',
    loadChildren: () => import('./pages/booking/mo12/mo12.module').then( m => m.MO12PageModule)
  },
  {
    path: 'mo3',
    loadChildren: () => import('./pages/booking/mo3/mo3.module').then( m => m.MO3PageModule)
  },
  {
    path: 'me1',
    loadChildren: () => import('./pages/booking/me1/me1.module').then( m => m.ME1PageModule)
  },
  {
    path: 'ka1',
    loadChildren: () => import('./pages/booking/ka1/ka1.module').then( m => m.KA1PageModule)
  },
  {
    path: 'kn1',
    loadChildren: () => import('./pages/booking/kn1/kn1.module').then( m => m.KN1PageModule)
  },
  {
    path: 'da1',
    loadChildren: () => import('./pages/booking/da1/da1.module').then( m => m.DA1PageModule)
  },
  {
    path: 'klup',
    loadChildren: () => import('./pages/booking/klup/klup.module').then( m => m.KLUPPageModule)
  },
  {
    path: 'kldown',
    loadChildren: () => import('./pages/booking/kldown/kldown.module').then( m => m.KLDOWNPageModule)
  },
  {
    path: 'cl1',
    loadChildren: () => import('./pages/booking/cl1/cl1.module').then( m => m.CL1PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'pck1',
    loadChildren: () => import('./pages/packages/pck1/pck1.module').then( m => m.Pck1PageModule)
  },
  {
    path: 'pck2',
    loadChildren: () => import('./pages/packages/pck2/pck2.module').then( m => m.Pck2PageModule)
  },
  {
    path: 'pck3',
    loadChildren: () => import('./pages/packages/pck3/pck3.module').then( m => m.Pck3PageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
