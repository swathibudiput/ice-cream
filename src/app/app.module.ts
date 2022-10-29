import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesertsComponent } from './deserts/deserts.component';
import { ThickshakesComponent } from './thickshakes/thickshakes.component';
import { MenuComponent } from './menu/menu.component';
import { IceCreamsComponent } from './ice-creams/ice-creams.component';
import { FaloodaComponent } from './falooda/falooda.component';
import { NuttyconesComponent } from './nuttycones/nuttycones.component';
import { createUrlTreeFromSnapshot, Router, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    DesertsComponent,
    ThickshakesComponent,
    MenuComponent,
    IceCreamsComponent,
    FaloodaComponent,
    NuttyconesComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
