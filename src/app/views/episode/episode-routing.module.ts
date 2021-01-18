import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodePage } from './episode.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodePageRoutingModule {}
