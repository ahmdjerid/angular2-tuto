import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./DashboardComponent";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data";



  @NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)

    ],
    declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroesComponent,
      DashboardComponent
    ],
    bootstrap: [AppComponent],
    providers: [HeroService],

  })


export class AppModule {
}


