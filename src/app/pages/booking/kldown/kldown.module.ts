import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KLDOWNPageRoutingModule } from './kldown-routing.module';

import { KLDOWNPage } from './kldown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KLDOWNPageRoutingModule
  ],
  declarations: [KLDOWNPage]
})
export class KLDOWNPageModule {}
