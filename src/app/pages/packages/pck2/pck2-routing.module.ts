import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pck2Page } from './pck2.page';

const routes: Routes = [
  {
    path: '',
    component: Pck2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pck2PageRoutingModule {}
