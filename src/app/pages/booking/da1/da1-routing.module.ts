import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DA1Page } from './da1.page';

const routes: Routes = [
  {
    path: '',
    component: DA1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DA1PageRoutingModule {}
