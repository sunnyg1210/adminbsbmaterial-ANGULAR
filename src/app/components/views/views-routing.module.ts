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

import { AlertsComponent } from './ui/alerts/alerts.component';
import { AnimationsComponent } from './ui/animations/animations.component';
import { BadgesComponent } from './ui/badges/badges.component';
import { BreadcrumbsComponent } from './ui/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './ui/buttons/buttons.component';
import { CollapseComponent } from './ui/collapse/collapse.component';
import { ColorsComponent } from './ui/colors/colors.component';
import { DialogsComponent } from './ui/dialogs/dialogs.component';
import { IconsComponent } from './ui/icons/icons.component';
import { LabelsComponent } from './ui/labels/labels.component';
import { ListGroupComponent } from './ui/list-group/list-group.component';
import { MediaObjectComponent } from './ui/media-object/media-object.component';
import { ModalsComponent } from './ui/modals/modals.component';
import { NotificationsComponent } from './ui/notifications/notifications.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { PreloadersComponent } from './ui/preloaders/preloaders.component';
import { ProgressbarsComponent } from './ui/progressbars/progressbars.component';
import { RangeSlidersComponent } from './ui/range-sliders/range-sliders.component';
import { SortableNestableComponent } from './ui/sortable-nestable/sortable-nestable.component';
import { TabsComponent } from './ui/tabs/tabs.component';
import { ThumbnailsComponent } from './ui/thumbnails/thumbnails.component';
import { TooltipsPopoversComponent } from './ui/tooltips-popovers/tooltips-popovers.component';
import { WavesComponent } from './ui/waves/waves.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BootstrapTablesComponent } from './tables/bootstrap-tables/bootstrap-tables.component';
import { NgxTableComponent } from './tables/ngx-table/ngx-table.component';
import { Ng2TableComponent } from './tables/ng2-table/ng2-table.component';

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
        { path: 'ui/alerts', component: AlertsComponent },
        { path: 'ui/animations', component: AnimationsComponent },
        { path: 'ui/badges', component: BadgesComponent },
        { path: 'ui/breadcrumbs', component: BreadcrumbsComponent },
        { path: 'ui/buttons', component: ButtonsComponent },
        { path: 'ui/collapse', component: CollapseComponent },
        { path: 'ui/colors', component: ColorsComponent },
        { path: 'ui/dialogs', component: DialogsComponent },
        { path: 'ui/icons', component: IconsComponent },
        { path: 'ui/labels', component: LabelsComponent },
        { path: 'ui/list-group', component: ListGroupComponent },
        { path: 'ui/media-object', component: MediaObjectComponent },
        { path: 'ui/modals', component: ModalsComponent },
        { path: 'ui/notifications', component: NotificationsComponent },
        { path: 'ui/pagination', component: PaginationComponent },
        { path: 'ui/preloaders', component: PreloadersComponent },
        { path: 'ui/progressbars', component: ProgressbarsComponent },
        { path: 'ui/range-sliders', component: RangeSlidersComponent },
        { path: 'ui/sortable-nestable', component: SortableNestableComponent },
        { path: 'ui/tabs', component: TabsComponent },
        { path: 'ui/thumbnails', component: ThumbnailsComponent },
        { path: 'ui/tooltips-popovers', component: TooltipsPopoversComponent },
        { path: 'ui/waves', component: WavesComponent },
        { path: 'tables/bootstrap', component: BootstrapTablesComponent },
        { path: 'tables/ngx', component: NgxTableComponent },
        { path: 'tables/ng2', component: Ng2TableComponent },
        
        { path: 'pages/profile', component: ProfileComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(viewsRoutes)],
  exports: [RouterModule]
})

export class ViewsRoutingModule { }
