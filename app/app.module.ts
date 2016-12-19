import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {HeroesComponent}  from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./DashboardComponent";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
      , {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',

      },
      {
        path: 'dashboard',
        component: DashboardComponent

      }
    ])

  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})

export class AppModule {
}


