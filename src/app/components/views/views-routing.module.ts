import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';

const viewsRoutes: Routes = [
  {
      path: 'views',
      component: ViewsComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'typography', component: TypographyComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(viewsRoutes)],
  exports: [RouterModule]
})

export class ViewsRoutingModule { }
