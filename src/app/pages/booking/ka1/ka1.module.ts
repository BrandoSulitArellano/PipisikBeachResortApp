import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KA1PageRoutingModule } from './ka1-routing.module';

import { KA1Page } from './ka1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KA1PageRoutingModule
  ],
  declarations: [KA1Page]
})
export class KA1PageModule {}
