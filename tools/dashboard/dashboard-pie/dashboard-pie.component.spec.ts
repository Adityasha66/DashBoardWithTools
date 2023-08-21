import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPieComponent } from './dashboard-pie.component';

describe('DashboardPieComponent', () => {
  let component: DashboardPieComponent;
  let fixture: ComponentFixture<DashboardPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPieComponent]
    });
    fixture = TestBed.createComponent(DashboardPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
