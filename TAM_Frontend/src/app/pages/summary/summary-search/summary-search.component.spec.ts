import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySearchComponent } from './summary-search.component';

describe('SummarySearchComponent', () => {
  let component: SummarySearchComponent;
  let fixture: ComponentFixture<SummarySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
