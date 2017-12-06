import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewsComponent } from './views.component';
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

const viewsRoutes: Routes = [
  {
      path: 'views',
      component: ViewsComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'typography', component: TypographyComponent },
        { path: 'helper-classes', component: HelperClassesComponent },
        { path: 'widgets/cards/basic', component: BasicComponent },
        { path: 'widgets/cards/colored', component: ColoredComponent },
        { path: 'widgets/cards/no-header', component: NoHeaderComponent },
        { path: 'widgets/infobox/infobox-1', component: Infobox1Component },
        { path: 'widgets/infobox/infobox-2', component: Infobox2Component },
        { path: 'widgets/infobox/infobox-3', component: Infobox3Component },
        { path: 'widgets/infobox/infobox-4', component: Infobox4Component },
        { path: 'widgets/infobox/infobox-5', component: Infobox5Component },
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(viewsRoutes)],
  exports: [RouterModule]
})

export class ViewsRoutingModule { }
