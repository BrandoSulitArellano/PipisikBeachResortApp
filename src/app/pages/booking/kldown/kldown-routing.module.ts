import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KLDOWNPage } from './kldown.page';

const routes: Routes = [
  {
    path: '',
    component: KLDOWNPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KLDOWNPageRoutingModule {}
