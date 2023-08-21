import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtableComponent } from './dashboardtable.component';

describe('DashboardtableComponent', () => {
  let component: DashboardtableComponent;
  let fixture: ComponentFixture<DashboardtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardtableComponent]
    });
    fixture = TestBed.createComponent(DashboardtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
