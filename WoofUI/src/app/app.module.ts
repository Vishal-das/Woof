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
import { WalkerRequestsComponent } from './walker-requests/walker-requests.component';
import { AddWalkerRequestComponent } from './users/add-walker-request/add-walker-request.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';
import { AppointmentsComponent } from './users/appointments/appointments.component';
import { ShopComponent } from './users/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    MainComponent,
    SidenavComponent,
    DogsComponent,
    WalkerRequestsComponent,
    AddWalkerRequestComponent,
    EditProfileComponent,
    AppointmentsComponent,
    ShopComponent
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
