import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const landingRoutes: Routes = [
  {
      path: 'landing',
      component: LandingComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
