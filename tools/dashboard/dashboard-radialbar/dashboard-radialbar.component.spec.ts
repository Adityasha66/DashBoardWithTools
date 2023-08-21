import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRadialbarComponent } from './dashboard-radialbar.component';

describe('DashboardRadialbarComponent', () => {
  let component: DashboardRadialbarComponent;
  let fixture: ComponentFixture<DashboardRadialbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRadialbarComponent]
    });
    fixture = TestBed.createComponent(DashboardRadialbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
