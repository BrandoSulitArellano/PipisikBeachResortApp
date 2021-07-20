import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ME1PageRoutingModule } from './me1-routing.module';

import { ME1Page } from './me1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ME1PageRoutingModule
  ],
  declarations: [ME1Page]
})
export class ME1PageModule {}
