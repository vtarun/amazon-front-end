import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysellComponent } from './todaysell.component';

describe('TodaysellComponent', () => {
  let component: TodaysellComponent;
  let fixture: ComponentFixture<TodaysellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
