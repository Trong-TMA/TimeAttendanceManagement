import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOfDeptComponent } from './summary-of-dept.component';

describe('SummaryOfDeptComponent', () => {
  let component: SummaryOfDeptComponent;
  let fixture: ComponentFixture<SummaryOfDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryOfDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryOfDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
