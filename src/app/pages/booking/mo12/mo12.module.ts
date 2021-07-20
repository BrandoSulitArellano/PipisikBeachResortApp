import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MO12PageRoutingModule } from './mo12-routing.module';

import { MO12Page } from './mo12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MO12PageRoutingModule
  ],
  declarations: [MO12Page]
})
export class MO12PageModule {}
