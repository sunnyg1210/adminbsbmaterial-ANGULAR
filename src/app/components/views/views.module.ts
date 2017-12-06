import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { NavbarTopComponent } from './partials/navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './partials/navbar-left/navbar-left.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  declarations: [
    ViewsComponent,
    NavbarTopComponent,
    NavbarLeftComponent,
    HomeComponent,
    TypographyComponent
  ],
  providers: []
})
export class ViewsModule { }
