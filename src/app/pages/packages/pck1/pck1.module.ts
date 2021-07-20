import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pck1PageRoutingModule } from './pck1-routing.module';

import { Pck1Page } from './pck1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pck1PageRoutingModule
  ],
  declarations: [Pck1Page]
})
export class Pck1PageModule {}
