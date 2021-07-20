import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MO12Page } from './mo12.page';

const routes: Routes = [
  {
    path: '',
    component: MO12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MO12PageRoutingModule {}
