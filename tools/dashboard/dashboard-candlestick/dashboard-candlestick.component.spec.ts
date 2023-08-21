import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCandlestickComponent } from './dashboard-candlestick.component';

describe('DashboardCandlestickComponent', () => {
  let component: DashboardCandlestickComponent;
  let fixture: ComponentFixture<DashboardCandlestickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCandlestickComponent]
    });
    fixture = TestBed.createComponent(DashboardCandlestickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
