import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day1ChallengeComponent } from './day1-challenge/day1-challenge.component';
import { Day1Component } from './day1/day1.component';
import { Day2ChallengeComponent } from './day2-challenge/day2-challenge.component';
import { Day3ChallengeComponent } from './day3-challenge/day3-challenge.component';
import { Day32ChallengeComponent } from './day32-challenge/day32-challenge.component';
import { Day9Component } from './day9/day9.component';
import { SwiperDemComponent } from './swiper-dem/swiper-dem.component';
import { Swiper2Component } from './swiper2/swiper2.component';
import { Ch4Component } from './ch4/ch4.component';
import { Day10Component } from './day10/day10.component';
import { NavchComponent } from './navch/navch.component';


const routes: Routes = [
  { path: 'day1ch', component: Day1ChallengeComponent},
  { path: 'day1', component: Day1Component},
  {path: 'day2ch', component: Day2ChallengeComponent},
  { path: 'day3ch', component: Day3ChallengeComponent},
  { path: 'day32ch', component: Day32ChallengeComponent},
  { path: 'day9', component: Day9Component},
  { path: 'swiper', component: SwiperDemComponent},
  { path: 'swiper2', component: Swiper2Component },
  { path: 'ch4', component: Ch4Component},
  { path: 'day10', component: Day10Component},
  { path: 'navch', component: NavchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  Day1ChallengeComponent,
  Day1Component,
  Day2ChallengeComponent,
  Day3ChallengeComponent,
]
