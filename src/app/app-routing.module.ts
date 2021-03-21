import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./views/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'ver/:id',
    loadChildren: () => import('./views/episode/episode.module').then( m => m.EpisodePageModule)
  },
  {
    path: 'anime/:id',
    loadChildren: () => import('./views/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'gender/:id',
    loadChildren: () => import('./views/gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'emision',
    loadChildren: () => import('./views/emision/emision.module').then( m => m.EmisionPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
