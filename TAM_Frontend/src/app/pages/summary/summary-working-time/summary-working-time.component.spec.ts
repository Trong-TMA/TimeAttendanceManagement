import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWorkingTimeComponent } from './summary-working-time.component';

describe('SummaryWorkingTimeComponent', () => {
  let component: SummaryWorkingTimeComponent;
  let fixture: ComponentFixture<SummaryWorkingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryWorkingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryWorkingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
