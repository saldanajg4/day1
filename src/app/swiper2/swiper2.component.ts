import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper2',
  template: `
    <h2>Template for ngx-swiper-wrapper</h2>
    
    <h3>Component</h3>
    <div style="width: 100%; height: 25vh;">
      <swiper class="swiper-container" [config]="config">
        <div *ngFor="let slide of slides" class="swiper-slide">
          <div style="width: 100%; height: 100%; text-align: center;">
            {{slide}}
          </div>
        </div>
      </swiper>
    </div>
    <button (click)="toggleSwipe()">TOGGLE SWIPER</button>
    <h3>Directive</h3>
    <div *ngIf="val"> 
    <div  style="width: 100%; height: 25vh;" class="swiper-container" [swiper]="config">
      <div class="swiper-wrapper">
        <div *ngFor="let slide of slides" class="swiper-slide">
          <div style="width: 100%; height: 100%; text-align: center;">
            {{slide}}
          </div>
        </div>
     </div>


      <div class="swiper-scrollbar" [hidden]="config.scrollbar === false"></div>
      <div class="swiper-pagination" [hidden]="config.pagination === false"></div>

      <div class="swiper-button-prev" [hidden]="config.navigation === false"></div>
      <div class="swiper-button-next" [hidden]="config.navigation === false"></div>
    </div>
  `,
  styleUrls: ['./swiper2.component.css']
})
export class Swiper2Component implements OnInit {
  val = true;
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    observer: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    init: false
  };
  
  toggleSwipe() {
    this.val = !this.val;
  }

  constructor() { }

  ngOnInit() {
  }

}
