import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBubbleComponent } from './dashboard-bubble.component';

describe('DashboardBubbleComponent', () => {
  let component: DashboardBubbleComponent;
  let fixture: ComponentFixture<DashboardBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBubbleComponent]
    });
    fixture = TestBed.createComponent(DashboardBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
