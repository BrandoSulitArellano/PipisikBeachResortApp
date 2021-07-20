import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ME1Page } from './me1.page';

const routes: Routes = [
  {
    path: '',
    component: ME1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ME1PageRoutingModule {}
