import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.TabsPageModule)
  },
  {
    path: 'anime/:id',
    loadChildren: () => import('./views/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'ver/:id',
    loadChildren: () => import('./views/episode/episode.module').then( m => m.EpisodePageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./views/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'gender/:id',
    loadChildren: () => import('./views/gender/gender.module').then( m => m.GenderPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
