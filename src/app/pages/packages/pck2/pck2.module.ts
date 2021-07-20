import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pck2PageRoutingModule } from './pck2-routing.module';

import { Pck2Page } from './pck2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pck2PageRoutingModule
  ],
  declarations: [Pck2Page]
})
export class Pck2PageModule {}
