import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KA1Page } from './ka1.page';

const routes: Routes = [
  {
    path: '',
    component: KA1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KA1PageRoutingModule {}
