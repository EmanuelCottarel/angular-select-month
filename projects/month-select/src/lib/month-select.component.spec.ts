import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSelectComponent } from './month-select.component';

describe('MonthSelectComponent', () => {
  let component: MonthSelectComponent;
  let fixture: ComponentFixture<MonthSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthSelectComponent]
    });
    fixture = TestBed.createComponent(MonthSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
