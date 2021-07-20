import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BO1PageRoutingModule } from './bo1-routing.module';

import { BO1Page } from './bo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BO1PageRoutingModule
  ],
  declarations: [BO1Page]
})
export class BO1PageModule {}
