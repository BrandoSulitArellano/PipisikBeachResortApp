import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KLUPPage } from './klup.page';

const routes: Routes = [
  {
    path: '',
    component: KLUPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KLUPPageRoutingModule {}
