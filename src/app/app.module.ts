import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Main Modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth/auth.module';
import { LandingModule } from './components/landing/landing.module';
import { ViewsModule } from './components/views/views.module';

// Main Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    AuthModule,
    ViewsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
