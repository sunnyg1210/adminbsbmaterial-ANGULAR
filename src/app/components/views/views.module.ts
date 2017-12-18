import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
    Infobox5Component,
    AlertsComponent,
    AnimationsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CollapseComponent,
    ColorsComponent,
    DialogsComponent,
    IconsComponent,
    LabelsComponent,
    ListGroupComponent,
    MediaObjectComponent,
    ModalsComponent,
    NotificationsComponent,
    PaginationComponent,
    PreloadersComponent,
    ProgressbarsComponent,
    RangeSlidersComponent,
    SortableNestableComponent,
    TabsComponent,
    ThumbnailsComponent,
    TooltipsPopoversComponent,
    WavesComponent,
    ProfileComponent
  ],
  providers: []
})
export class ViewsModule { }
