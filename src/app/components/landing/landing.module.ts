import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarTopLandingComponent } from './partials/navbar-top-landing/navbar-top-landing.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarTopLandingComponent,
  ],
  providers: []
})
export class LandingModule { }
