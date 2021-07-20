import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CL1PageRoutingModule } from './cl1-routing.module';

import { CL1Page } from './cl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CL1PageRoutingModule
  ],
  declarations: [CL1Page]
})
export class CL1PageModule {}
