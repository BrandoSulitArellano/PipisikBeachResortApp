import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KN1PageRoutingModule } from './kn1-routing.module';

import { KN1Page } from './kn1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KN1PageRoutingModule
  ],
  declarations: [KN1Page]
})
export class KN1PageModule {}
