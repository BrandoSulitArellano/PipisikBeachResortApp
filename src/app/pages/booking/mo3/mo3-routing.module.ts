import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MO3Page } from './mo3.page';

const routes: Routes = [
  {
    path: '',
    component: MO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MO3PageRoutingModule {}
