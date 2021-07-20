import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BO1Page } from './bo1.page';

const routes: Routes = [
  {
    path: '',
    component: BO1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BO1PageRoutingModule {}
