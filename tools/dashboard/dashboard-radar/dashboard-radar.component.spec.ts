import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRadarComponent } from './dashboard-radar.component';

describe('DashboardRadarComponent', () => {
  let component: DashboardRadarComponent;
  let fixture: ComponentFixture<DashboardRadarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRadarComponent]
    });
    fixture = TestBed.createComponent(DashboardRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
