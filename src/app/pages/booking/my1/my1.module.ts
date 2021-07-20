import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MY1PageRoutingModule } from './my1-routing.module';

import { MY1Page } from './my1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MY1PageRoutingModule
  ],
  declarations: [MY1Page]
})
export class MY1PageModule {}
