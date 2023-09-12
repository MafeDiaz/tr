import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaschboardPage } from './daschboard.page';

const routes: Routes = [
  {
    path: '',
    component: DaschboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaschboardPageRoutingModule {}
