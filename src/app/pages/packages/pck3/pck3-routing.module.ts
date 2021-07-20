import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pck3Page } from './pck3.page';

const routes: Routes = [
  {
    path: '',
    component: Pck3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pck3PageRoutingModule {}
