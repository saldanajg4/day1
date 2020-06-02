import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2ChallengeComponent } from './day2-challenge/day2-challenge.component';
import { Day3ChallengeComponent } from './day3-challenge/day3-challenge.component';
import { Day32ChallengeComponent } from './day32-challenge/day32-challenge.component';
import { Day9Component } from './day9/day9.component';
import { SwiperDemComponent } from './swiper-dem/swiper-dem.component';
import { Swiper2Component } from './swiper2/swiper2.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { Ch4Component } from './ch4/ch4.component';
import { Day10Component } from './day10/day10.component';
import { NavchComponent } from './navch/navch.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Day1Component,
    Day2ChallengeComponent,
    Day3ChallengeComponent,
    Day32ChallengeComponent,
    Day9Component,
    SwiperDemComponent,
    Swiper2Component,
    Ch4Component,
    Day10Component,
    NavchComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
