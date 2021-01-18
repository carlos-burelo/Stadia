import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryPage } from './directory.page';

const routes: Routes = [
  {
    path: '',
    component: DirectoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoryPageRoutingModule {}
