import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './components/misc/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'landing',
        loadChildren: 'app/components/landing/landing.module#LandingModule',
        data: { preload: true }
    },
    {
        path: 'auth',
        loadChildren: 'app/components/auth/auth.module#AuthModule'
    },
    {
        path: 'views',
        loadChildren: 'app/components/views/views.module#ViewsModule'
    },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
        NotFoundComponent
    ]
})
  
export class AppRoutingModule { }