import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Homepage/home/home.component';
import { PageNotFoundComponent } from './Homepage/page-not-found/page-not-found.component';
import { NavComponent } from './Homepage/nav/nav.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './users/sidenav/sidenav.component';
import { DogsComponent } from './dogs/dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    MainComponent,
    SidenavComponent,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
