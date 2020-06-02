import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2ChallengeComponent } from './day2-challenge.component';

describe('Day2ChallengeComponent', () => {
  let component: Day2ChallengeComponent;
  let fixture: ComponentFixture<Day2ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2ChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
