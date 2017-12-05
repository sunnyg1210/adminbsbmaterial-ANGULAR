import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const authRoutes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot', component: ForgotPasswordComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
  
export class AuthRoutingModule {

}