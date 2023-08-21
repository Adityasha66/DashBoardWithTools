import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRangeareaComponent } from './dashboard-rangearea.component';

describe('DashboardRangeareaComponent', () => {
  let component: DashboardRangeareaComponent;
  let fixture: ComponentFixture<DashboardRangeareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRangeareaComponent]
    });
    fixture = TestBed.createComponent(DashboardRangeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
