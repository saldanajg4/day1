import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day32ChallengeComponent } from './day32-challenge.component';

describe('Day32ChallengeComponent', () => {
  let component: Day32ChallengeComponent;
  let fixture: ComponentFixture<Day32ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day32ChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day32ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
