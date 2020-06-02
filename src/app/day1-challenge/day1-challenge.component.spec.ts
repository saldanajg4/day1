import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1ChallengeComponent } from './day1-challenge.component';

describe('Day1ChallengeComponent', () => {
  let component: Day1ChallengeComponent;
  let fixture: ComponentFixture<Day1ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1ChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
