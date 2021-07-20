import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MO3PageRoutingModule } from './mo3-routing.module';

import { MO3Page } from './mo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MO3PageRoutingModule
  ],
  declarations: [MO3Page]
})
export class MO3PageModule {}
