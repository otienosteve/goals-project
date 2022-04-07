import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalComponentComponent } from './goal-component.component';

describe('GoalComponentComponent', () => {
  let component: GoalComponentComponent;
  let fixture: ComponentFixture<GoalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
