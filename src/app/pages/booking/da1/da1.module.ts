import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DA1PageRoutingModule } from './da1-routing.module';

import { DA1Page } from './da1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DA1PageRoutingModule
  ],
  declarations: [DA1Page]
})
export class DA1PageModule {}
