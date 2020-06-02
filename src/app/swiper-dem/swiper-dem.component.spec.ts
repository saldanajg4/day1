import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDemComponent } from './swiper-dem.component';

describe('SwiperDemComponent', () => {
  let component: SwiperDemComponent;
  let fixture: ComponentFixture<SwiperDemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperDemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
