import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KN1Page } from './kn1.page';

const routes: Routes = [
  {
    path: '',
    component: KN1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KN1PageRoutingModule {}
