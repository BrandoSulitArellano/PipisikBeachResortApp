import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CottegesPageRoutingModule } from './cotteges-routing.module';

import { CottegesPage } from './cotteges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CottegesPageRoutingModule
  ],
  declarations: [CottegesPage]
})
export class CottegesPageModule {}
