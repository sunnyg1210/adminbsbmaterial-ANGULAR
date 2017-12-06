import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { NavbarTopComponent } from './partials/navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './partials/navbar-left/navbar-left.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { BasicComponent } from './widgets/cards/basic/basic.component';
import { ColoredComponent } from './widgets/cards/colored/colored.component';
import { NoHeaderComponent } from './widgets/cards/no-header/no-header.component';
import { Infobox1Component } from './widgets/infobox/infobox-1/infobox-1.component';
import { Infobox2Component } from './widgets/infobox/infobox-2/infobox-2.component';
import { Infobox3Component } from './widgets/infobox/infobox-3/infobox-3.component';
import { Infobox4Component } from './widgets/infobox/infobox-4/infobox-4.component';
import { Infobox5Component } from './widgets/infobox/infobox-5/infobox-5.component';

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
    TypographyComponent,
    HelperClassesComponent,
    BasicComponent,
    ColoredComponent,
    NoHeaderComponent,
    Infobox1Component,
    Infobox2Component,
    Infobox3Component,
    Infobox4Component,
    Infobox5Component
  ],
  providers: []
})
export class ViewsModule { }
