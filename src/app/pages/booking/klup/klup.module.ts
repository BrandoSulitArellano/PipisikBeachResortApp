import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KLUPPageRoutingModule } from './klup-routing.module';

import { KLUPPage } from './klup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KLUPPageRoutingModule
  ],
  declarations: [KLUPPage]
})
export class KLUPPageModule {}
