import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmisionPageRoutingModule } from './emision-routing.module';

import { EmisionPage } from './emision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmisionPageRoutingModule
  ],
  declarations: [EmisionPage]
})
export class EmisionPageModule {}
