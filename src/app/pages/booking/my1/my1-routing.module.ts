import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MY1Page } from './my1.page';

const routes: Routes = [
  {
    path: '',
    component: MY1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MY1PageRoutingModule {}
