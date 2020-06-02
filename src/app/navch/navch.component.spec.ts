import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavchComponent } from './navch.component';

describe('NavchComponent', () => {
  let component: NavchComponent;
  let fixture: ComponentFixture<NavchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
