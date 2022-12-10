import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySummaryComponent } from './summary-summary.component';

describe('SummarySummaryComponent', () => {
  let component: SummarySummaryComponent;
  let fixture: ComponentFixture<SummarySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarySummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
