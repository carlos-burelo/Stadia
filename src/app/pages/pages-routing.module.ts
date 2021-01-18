import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TabsPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '', redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'emision',
        loadChildren: () => import('./emision/emision.module').then( m => m.EmisionPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'directory',
        loadChildren: () => import('./directory/directory.module').then( m => m.DirectoryPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
