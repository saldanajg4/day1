import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxEx1Component } from './redux-ex1.component';

describe('ReduxEx1Component', () => {
  let component: ReduxEx1Component;
  let fixture: ComponentFixture<ReduxEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduxEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
