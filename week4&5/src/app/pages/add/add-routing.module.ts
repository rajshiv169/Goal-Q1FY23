import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AddPage } from './add.page';

const routes: Routes = [
  {
    path: '',
    component: AddPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class AddPageRoutingModule {}
