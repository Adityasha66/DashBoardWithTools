import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcalanderComponent } from './newcalander.component';

describe('NewcalanderComponent', () => {
  let component: NewcalanderComponent;
  let fixture: ComponentFixture<NewcalanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcalanderComponent]
    });
    fixture = TestBed.createComponent(NewcalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
