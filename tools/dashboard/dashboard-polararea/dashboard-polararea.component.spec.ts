import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPolarareaComponent } from './dashboard-polararea.component';

describe('DashboardPolarareaComponent', () => {
  let component: DashboardPolarareaComponent;
  let fixture: ComponentFixture<DashboardPolarareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPolarareaComponent]
    });
    fixture = TestBed.createComponent(DashboardPolarareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
