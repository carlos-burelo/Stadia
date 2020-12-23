import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MyListsComponent } from './pages/my-lists/my-lists.component';
import { EmisionComponent } from './pages/emision/emision.component';
import { EpisodeComponent } from './views/episode/episode.component';
import { AnimeComponent } from './views/anime/anime.component';
import { DirectoryComponent } from '@pages/directory/directory.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix' ,redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'emision', component: EmisionComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'mylist', component: MyListsComponent },
  { path: 'ver/:id', component: EpisodeComponent },
  { path: 'anime/:id', component: AnimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }