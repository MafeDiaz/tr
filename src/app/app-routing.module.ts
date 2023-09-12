import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'daschboard',
    loadChildren: () => import('./daschboard/daschboard.module').then( m => m.DaschboardPageModule)
  },
  {
    path: 'homme',
    loadChildren: () => import('./homme/homme.module').then( m => m.HommePageModule)
  },
  {
    path: 'reproductor-audio',
    loadChildren: () => import('./reproductor-audio/reproductor-audio.module').then( m => m.ReproductorAudioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
