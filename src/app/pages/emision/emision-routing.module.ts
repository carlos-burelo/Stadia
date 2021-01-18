import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmisionPage } from './emision.page';

const routes: Routes = [
  {
    path: '',
    component: EmisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmisionPageRoutingModule {}
