import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CottegesPage } from './cotteges.page';

const routes: Routes = [
  {
    path: '',
    component: CottegesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CottegesPageRoutingModule {}
