import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { BlogContentPage } from './blog-content.page';

const routes: Routes = [
  {
    path: ':id',
    component: BlogContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class BlogContentPageRoutingModule {}
