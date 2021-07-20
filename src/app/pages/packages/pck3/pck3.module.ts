import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pck3PageRoutingModule } from './pck3-routing.module';

import { Pck3Page } from './pck3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pck3PageRoutingModule
  ],
  declarations: [Pck3Page]
})
export class Pck3PageModule {}
