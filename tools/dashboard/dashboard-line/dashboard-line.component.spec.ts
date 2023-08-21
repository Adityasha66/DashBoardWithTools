import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLineComponent } from './dashboard-line.component';

describe('DashboardLineComponent', () => {
  let component: DashboardLineComponent;
  let fixture: ComponentFixture<DashboardLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardLineComponent]
    });
    fixture = TestBed.createComponent(DashboardLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
