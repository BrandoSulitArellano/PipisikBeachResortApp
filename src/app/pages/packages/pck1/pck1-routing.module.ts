import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pck1Page } from './pck1.page';

const routes: Routes = [
  {
    path: '',
    component: Pck1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pck1PageRoutingModule {}
