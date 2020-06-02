import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3ChallengeComponent } from './day3-challenge.component';

describe('Day3ChallengeComponent', () => {
  let component: Day3ChallengeComponent;
  let fixture: ComponentFixture<Day3ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3ChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
