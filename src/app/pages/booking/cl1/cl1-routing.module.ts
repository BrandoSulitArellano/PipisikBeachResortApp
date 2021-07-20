import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CL1Page } from './cl1.page';

const routes: Routes = [
  {
    path: '',
    component: CL1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CL1PageRoutingModule {}
